"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Upload, X, Plus, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

type Trip = {
  id?: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  cover_image: string;
  gallery_images: string[];
  youtube_url: string | null;
  external_links: any;
};

export default function TripForm({ trip }: { trip?: Trip }) {
  const [formData, setFormData] = useState<Trip>({
    title: trip?.title || "",
    slug: trip?.slug || "",
    description: trip?.description || "",
    location: trip?.location || "",
    cover_image: trip?.cover_image || "",
    gallery_images: trip?.gallery_images || [],
    youtube_url: trip?.youtube_url || "",
    external_links: trip?.external_links || [],
  });

  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const supabase = createClient();

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImageFile(e.target.files[0]);
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGalleryFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingGalleryImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      gallery_images: prev.gallery_images.filter((_, i) => i !== index),
    }));
  };

  const addExternalLink = () => {
    setFormData((prev) => ({
      ...prev,
      external_links: [
        ...(Array.isArray(prev.external_links) ? prev.external_links : []),
        { title: "", url: "" },
      ],
    }));
  };

  const updateExternalLink = (index: number, field: string, value: string) => {
    const links = Array.isArray(formData.external_links)
      ? [...formData.external_links]
      : [];
    links[index] = { ...links[index], [field]: value };
    setFormData((prev) => ({
      ...prev,
      external_links: links,
    }));
  };

  const removeExternalLink = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      external_links: (Array.isArray(prev.external_links)
        ? prev.external_links
        : []
      ).filter((_, i) => i !== index),
    }));
  };

  const uploadImage = async (file: File, path: string): Promise<string> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("trips")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const {
      data: { publicUrl },
    } = supabase.storage.from("trips").getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      let coverImageUrl = formData.cover_image;
      const galleryUrls = [...formData.gallery_images];

      // Upload cover image if new file selected
      if (coverImageFile) {
        coverImageUrl = await uploadImage(coverImageFile, "covers");
      }

      // Upload gallery images
      for (const file of galleryFiles) {
        const url = await uploadImage(file, "gallery");
        galleryUrls.push(url);
      }

      const tripData = {
        ...formData,
        cover_image: coverImageUrl,
        gallery_images: galleryUrls,
        external_links: formData.external_links,
      };

      if (trip?.id) {
        // Update existing trip
        const { error } = await supabase
          .from("trips")
          .update(tripData)
          .eq("id", trip.id);

        if (error) throw error;
      } else {
        // Create new trip
        const { error } = await supabase.from("trips").insert(tripData);

        if (error) throw error;
      }

      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to save trip");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Trip Title *
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="Amazing Cultural Tour"
        />
      </div>

      {/* Slug */}
      <div>
        <label
          htmlFor="slug"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          URL Slug *
        </label>
        <input
          type="text"
          id="slug"
          value={formData.slug}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, slug: e.target.value }))
          }
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="amazing-cultural-tour"
        />
        <p className="text-sm text-gray-500 mt-1">
          URL: /trips/{formData.slug || "your-trip-slug"}
        </p>
      </div>

      {/* Location */}
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Location *
        </label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, location: e.target.value }))
          }
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="Kandy, Sri Lanka"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description *
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
          required
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="Describe the trip experience..."
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cover Image *
        </label>
        {formData.cover_image && !coverImageFile && (
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
            <Image
              src={formData.cover_image}
              alt="Cover"
              fill
              className="object-cover"
            />
          </div>
        )}
        {coverImageFile && (
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
            <img
              src={URL.createObjectURL(coverImageFile)}
              alt="Cover preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-brand-500 transition-colors">
          <div className="text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <span className="text-sm text-gray-600">
              {coverImageFile || formData.cover_image
                ? "Change cover image"
                : "Upload cover image"}
            </span>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageChange}
            className="hidden"
            required={!trip && !formData.cover_image}
          />
        </label>
      </div>

      {/* Gallery Images */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gallery Images (Optional)
        </label>

        {/* Existing gallery images */}
        {formData.gallery_images.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            {formData.gallery_images.map((img, index) => (
              <div key={index} className="relative group">
                <div className="relative w-full h-32 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`Gallery ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeExistingGalleryImage(index)}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* New gallery images */}
        {galleryFiles.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            {galleryFiles.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`New gallery ${index}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeGalleryImage(index)}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-brand-500 transition-colors">
          <div className="text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <span className="text-sm text-gray-600">Upload gallery images</span>
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryChange}
            className="hidden"
          />
        </label>
      </div>

      {/* YouTube URL */}
      <div>
        <label
          htmlFor="youtube_url"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          YouTube Video URL (Optional)
        </label>
        <input
          type="url"
          id="youtube_url"
          value={formData.youtube_url || ""}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, youtube_url: e.target.value }))
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          placeholder="https://www.youtube.com/watch?v=..."
        />
      </div>

      {/* External Links */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">
            External Links (Optional)
          </label>
          <button
            type="button"
            onClick={addExternalLink}
            className="flex items-center space-x-2 text-sm text-brand-700 hover:text-brand-900"
          >
            <Plus className="w-4 h-4" />
            <span>Add Link</span>
          </button>
        </div>

        {Array.isArray(formData.external_links) &&
          formData.external_links.map((link: any, index: number) => (
            <div key={index} className="flex items-center space-x-3 mb-3">
              <input
                type="text"
                value={link.title}
                onChange={(e) =>
                  updateExternalLink(index, "title", e.target.value)
                }
                placeholder="Link title"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <input
                type="url"
                value={link.url}
                onChange={(e) =>
                  updateExternalLink(index, "url", e.target.value)
                }
                placeholder="https://..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => removeExternalLink(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <div className="flex items-center space-x-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 gradient-brand text-white rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Saving..." : trip ? "Update Trip" : "Create Trip"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
