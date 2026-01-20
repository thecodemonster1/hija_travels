export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      trips: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string;
          location: string;
          cover_image: string;
          gallery_images: string[];
          youtube_url: string | null;
          external_links: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description: string;
          location: string;
          cover_image: string;
          gallery_images?: string[];
          youtube_url?: string | null;
          external_links?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string;
          location?: string;
          cover_image?: string;
          gallery_images?: string[];
          youtube_url?: string | null;
          external_links?: Json | null;
          updated_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          trip_id: string;
          user_id: string;
          rating: number;
          comment: string;
          images: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          trip_id: string;
          user_id: string;
          rating: number;
          comment: string;
          images?: string[];
          created_at?: string;
        };
        Update: {
          id?: string;
          trip_id?: string;
          user_id?: string;
          rating?: number;
          comment?: string;
          images?: string[];
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          is_admin: boolean;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          is_admin?: boolean;
          created_at?: string;
        };
        Update: {
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          is_admin?: boolean;
        };
      };
    };
  };
}
