import { Button } from "@/components/ui/button";
import { signOut } from "@/server/auth";

const AdminPage = () => {
  return (
    <div>
      <p>Admin page</p>
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: "/auth/login",
          });
        }}
      >
        <Button type="submit">Sigh out</Button>
      </form>
    </div>
  );
};

export default AdminPage;
