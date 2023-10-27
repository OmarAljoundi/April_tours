import { Database } from "@/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";

interface DashboardPageProps {}
export const getCurrentUser = async (): Promise<boolean | undefined> => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { data: session_response, error: session_error } =
    await supabase.auth.getUser();

  if (session_response?.user) {
    return true;
  }

  console.log("User not authenticated." + session_error?.message);
  return false;
};

export default async function DashboardPage() {
  const currentUser = await getCurrentUser();
  if (currentUser) return redirect("/admin/dashboard/tour");
  else {
    return redirect("/admin/login");
  }
}
