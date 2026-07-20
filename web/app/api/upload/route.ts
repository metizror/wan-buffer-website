import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { saveUploadedImage } from "@/lib/upload-service";

// Uploads write to disk at request time — never statically optimize.
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const saved = await saveUploadedImage(file);
    return NextResponse.json(saved, { status: 201 });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
