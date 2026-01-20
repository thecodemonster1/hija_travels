import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import DeleteTripButton from "@/components/admin/DeleteTripButton";

export default async function AdminPage() {
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

  const { data: trips } = await supabase
    .from("trips")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Manage your trips and content</p>
          </div>
          <Link
            href="/admin/trips/new"
            className="flex items-center space-x-2 px-6 py-3 gradient-brand text-white rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            <Plus className="w-5 h-5" />
            <span>New Trip</span>
          </Link>
        </div>

        {/* Trips List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">All Trips</h2>
          </div>

          {trips && trips.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {trip.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {trip.location}
                      </p>
                      <p className="text-xs text-gray-500">
                        Created:{" "}
                        {new Date(trip.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Link
                        href={`/admin/trips/edit/${trip.id}`}
                        className="p-2 text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-5 h-5" />
                      </Link>
                      <DeleteTripButton
                        tripId={trip.id}
                        tripTitle={trip.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-600 mb-4">No trips yet</p>
              <Link
                href="/admin/trips/new"
                className="inline-flex items-center space-x-2 px-6 py-3 gradient-brand text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Plus className="w-5 h-5" />
                <span>Create Your First Trip</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
