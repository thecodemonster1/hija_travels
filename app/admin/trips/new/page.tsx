import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import TripForm from "@/components/admin/TripForm";

export default async function NewTripPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Trip</h1>
          <p className="text-gray-600 mt-2">
            Add a new trip to showcase to your customers
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <TripForm />
        </div>
      </div>
    </div>
  );
}
