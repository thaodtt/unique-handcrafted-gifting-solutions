// src/types/artwork.ts
export type ArtworkType = 'painting' | 'tray' | 'coaster';
export type ArtworkCategory = 'New' | 'Popular' | 'Diwali' | string; // Allow other string categories

export interface Artwork {
  id: string; // Unique identifier
  name: string;
  dimension: string; // e.g., "12x16 inches", "10cm diameter"
  material: string; // e.g., "Acrylic on Canvas", "Resin on Wood", "Ceramic"
  description: string;
  imageUrl: string; // Path to the image (e.g., /images/artwork1.jpg)
  type: ArtworkType;
  categories: ArtworkCategory[];
}
