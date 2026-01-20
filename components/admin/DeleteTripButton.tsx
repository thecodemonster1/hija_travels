"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Trash2 } from "lucide-react";

export default function DeleteTripButton({
  tripId,
  tripTitle,
}: {
  tripId: string;
  tripTitle: string;
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${tripTitle}"?`)) {
      return;
    }

    setIsDeleting(true);

    try {
      const { error } = await supabase.from("trips").delete().eq("id", tripId);

      if (error) throw error;

      router.refresh();
    } catch (err: any) {
      alert("Failed to delete trip: " + err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  );
}
