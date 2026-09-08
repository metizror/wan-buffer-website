"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback, useEffect, useRef, useState } from "react";
import { IMAGE_ACCEPT, uploadImage } from "@/lib/upload-client";

interface TipTapEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export function TipTapEditor({ value, onChange }: TipTapEditorProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgOpen, setImgOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Image,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Start writing your blog content..." }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [value, editor]);

  const insertImage = useCallback(
    (src: string) => {
      editor?.chain().focus().setImage({ src }).run();
    },
    [editor]
  );

  /** Upload to the server first so the post never points at a temporary blob. */
  const handleFile = useCallback(
    async (file: File) => {
      setError("");
      setUploading(true);
      try {
        insertImage(await uploadImage(file));
        setImgOpen(false);
        setImgUrl("");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setUploading(false);
        if (fileRef.current) fileRef.current.value = "";
      }
    },
    [insertImage]
  );

  // Pasting or dragging an image file in should save it to the server too,
  // otherwise the editor would embed a browser-local blob: URL.
  useEffect(() => {
    if (!editor) return;
    const dom = editor.view.dom;

    function imageFrom(list: FileList | null | undefined) {
      const files = list ? Array.from(list) : [];
      return files.find((f) => f.type.startsWith("image/"));
    }

    function onPaste(e: ClipboardEvent) {
      const file = imageFrom(e.clipboardData?.files);
      if (!file) return;
      e.preventDefault();
      void handleFile(file);
    }

    function onDrop(e: DragEvent) {
      const file = imageFrom(e.dataTransfer?.files);
      if (!file) return;
      e.preventDefault();
      void handleFile(file);
    }

    dom.addEventListener("paste", onPaste);
    dom.addEventListener("drop", onDrop);
    return () => {
      dom.removeEventListener("paste", onPaste);
      dom.removeEventListener("drop", onDrop);
    };
  }, [editor, handleFile]);

  const addLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="adm-editor-wrap">
      <div className="adm-editor-toolbar">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          1. List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          Quote
        </button>
        <button
          type="button"
          onClick={addLink}
          className={editor.isActive("link") ? "is-active" : ""}
        >
          Link
        </button>

        <div className="adm-editor-imgmenu">
          <button
            type="button"
            onClick={() => {
              setError("");
              setImgOpen((o) => !o);
            }}
            className={imgOpen ? "is-active" : ""}
            aria-expanded={imgOpen}
          >
            Image
          </button>

          {imgOpen && (
            <div className="adm-editor-imgpop">
              <input
                ref={fileRef}
                type="file"
                accept={IMAGE_ACCEPT}
                hidden
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void handleFile(f);
                }}
              />
              <button
                type="button"
                className="adm-btn adm-btn-secondary adm-btn-sm"
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload image"}
              </button>

              <input
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                placeholder="or paste an image URL"
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  e.preventDefault();
                  if (!imgUrl.trim()) return;
                  insertImage(imgUrl.trim());
                  setImgUrl("");
                  setImgOpen(false);
                }}
              />
              <button
                type="button"
                className="adm-btn adm-btn-sm"
                disabled={!imgUrl.trim() || uploading}
                onClick={() => {
                  insertImage(imgUrl.trim());
                  setImgUrl("");
                  setImgOpen(false);
                }}
              >
                Insert link
              </button>

              <p className="adm-editor-imghint">
                Uploads are saved on the server under /uploads. You can also
                paste or drag an image straight into the editor.
              </p>
              {error && <p className="adm-field-error">{error}</p>}
            </div>
          )}
        </div>
      </div>
      <div className="adm-editor-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
