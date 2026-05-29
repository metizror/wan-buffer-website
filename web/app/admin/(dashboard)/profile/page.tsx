import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/dal";
import { getDb } from "@/lib/mongodb";
import { ProfileForm } from "@/components/admin/profile-form";

export default async function ProfilePage() {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  const db = await getDb();
  const user = await db
    .collection("admin_users")
    .findOne(
      { _id: new ObjectId(session.userId) as unknown as undefined },
      { projection: { passwordHash: 0 } }
    );

  if (!user) redirect("/admin/login");

  return (
    <>
      <div className="adm-page-header">
        <h1>My Profile</h1>
      </div>
      <ProfileForm
        user={{
          displayName: user.displayName,
          email: user.email,
        }}
      />
    </>
  );
}
