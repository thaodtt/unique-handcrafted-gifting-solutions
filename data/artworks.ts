// src/data/artworks.ts
import { Artwork } from "@/types/artwork";

export const artworks: Artwork[] = [
  {
    id: "painting-clay-modern-tree-of-life",
    name: "Modern Clay Tree Of Life Painting", // Reordered for clarity
    dimension: "12 inch", // As requested
    material: "Clay Mural on Board/Canvas", // Inferred from 'clay'
    description: "A modern painting crafted with clay elements, depicting the Tree of Life.",
    imageUrl: "/images/painting-clay-modern-tree-of-life.png",
    type: "painting", // Inferred from 'painting'
    categories: ["Clay Art", "Contemporary"], // Inferred from filename
  },
  {
    id: "painting-clay-modern-vibrance-1",
    name: "Modern Clay Vibrance Painting 1",
    dimension: "12 inch",
    material: "Clay Mural on Board/Canvas", // Inferred from 'clay'
    description: "A vibrant modern painting crafted with clay elements (Part 1).",
    imageUrl: "/images/painting-clay-modern-vibrance-1.png",
    type: "painting",
    categories: ["Clay Art", "Contemporary"],
  },
  {
    id: "painting-clay-modern-vibrance-2",
    name: "Modern Clay Vibrance Painting 2",
    dimension: "12 inch",
    material: "Clay Mural on Board/Canvas", // Inferred from 'clay'
    description: "A vibrant modern painting crafted with clay elements (Part 2).",
    imageUrl: "/images/painting-clay-modern-vibrance-2.png",
    type: "painting",
    categories: ["Clay Art", "Contemporary"],
  },
  {
    id: "painting-madhubani-om-ganesha",
    name: "Madhubani Om Ganesha Painting",
    dimension: "12 inch",
    material: "Acrylic/Natural Dyes on Paper/Canvas", // Typical for Madhubani
    description: "Traditional Madhubani style painting featuring Lord Ganesha and the Om symbol.",
    imageUrl: "/images/painting-madhubani-om-ganesha.png",
    type: "painting",
    categories: ["Madhubani", "Religious"],
  },
  {
    id: "painting-madhubani-peace-and-harmony",
    name: "Madhubani Peace And Harmony Painting",
    dimension: "12 inch",
    material: "Acrylic/Natural Dyes on Paper/Canvas", // Typical for Madhubani
    description: "A Madhubani painting expressing themes of peace and harmony through traditional motifs.",
    imageUrl: "/images/painting-madhubani-peace-and-harmony.png",
    type: "painting",
    categories: ["Madhubani"],
  },
  {
    id: "painting-tanjore-24-carat-gold-1",
    name: "Tanjore Painting (24 Carat Gold) 1",
    dimension: "12 inch",
    material: "24 Carat Gold Foil, Semi-precious stones on Board", // Typical for Tanjore
    description: "An intricate Tanjore painting adorned with 24 carat gold foil and stones (Design 1).",
    imageUrl: "/images/painting-tanjore-24-carat-gold-1.png",
    type: "painting",
    categories: ["Tanjore", "Gold", "Religious", "Traditional"],
  },
  {
    id: "painting-tanjore-24-carat-gold-2",
    name: "Tanjore Painting (24 Carat Gold) 2",
    dimension: "12 inch",
    material: "24 Carat Gold Foil, Semi-precious stones on Board", // Typical for Tanjore
    description: "An intricate Tanjore painting adorned with 24 carat gold foil and stones (Design 2).",
    imageUrl: "/images/painting-tanjore-24-carat-gold-2.png",
    type: "painting",
    categories: ["Tanjore", "Gold", "Religious", "Traditional"],
  },
  {
    id: "painting-tanjore-24-carat-gold-3",
    name: "Tanjore Painting (24 Carat Gold) 3",
    dimension: "12 inch",
    material: "24 Carat Gold Foil, Semi-precious stones on Board", // Typical for Tanjore
    description: "An intricate Tanjore painting adorned with 24 carat gold foil and stones (Design 3).",
    imageUrl: "/images/painting-tanjore-24-carat-gold-3.png",
    type: "painting",
    categories: ["Tanjore", "Gold", "Religious", "Traditional"],
  },
  {
    // Note: Corrected typo in id, kept original filename for imageUrl
    id: "painting-clay-floral-tranquility",
    name: "Clay Floral Tranquility Painting",
    dimension: "12 inch",
    material: "Clay Mural on Board/Canvas", // Inferred from 'clay'
    description: "A tranquil painting featuring floral designs crafted with clay.",
    imageUrl: "/images/paiting-clay-floral-tranquility.png", // Original filename
    type: "painting", // Inferred from corrected name pattern
    categories: ["Clay Art", "Floral"],
  },
  {
    id: "tray-contemporary-peacock",
    name: "Contemporary Peacock Tray",
    dimension: "12 inch",
    material: "Painted Wood/MDF with Resin Coat", // Common material for decorative trays
    description: "A decorative tray featuring a stylish, contemporary peacock design.",
    imageUrl: "/images/tray-contemporary-peacock.png",
    type: "tray", // Inferred from 'tray'
    categories: ["Contemporary", "Birds"],
  },
  {
    id: "tray-contemporary-people",
    name: "Contemporary People Tray",
    dimension: "12 inch",
    material: "Painted Wood/MDF with Resin Coat",
    description: "A unique tray decorated with contemporary style depictions of people.",
    imageUrl: "/images/tray-contemporary-people.png",
    type: "tray",
    categories: ["Contemporary"],
  },
  {
    id: "tray-kalamkari-peacock",
    name: "Kalamkari Peacock Tray",
    dimension: "12 inch",
    material: "Painted Wood/MDF with Resin Coat", // Assumes Kalamkari style painting, not fabric inlay
    description: "A beautiful tray adorned with Kalamkari style peacock artwork, showcasing traditional Indian art.",
    imageUrl: "/images/tray-kalamkari-peacock.png",
    type: "tray",
    categories: ["Kalamkari", "Birds", "Traditional"],
  },
  {
    id: "tray-madhubani-elephant",
    name: "Madhubani Elephant Tray",
    dimension: "12 inch",
    material: "Painted Wood/MDF with Resin Coat",
    description: "A decorative tray featuring a charming elephant design in the traditional Madhubani style.",
    imageUrl: "/images/tray-madhubani-elephant.png",
    type: "tray",
    categories: ["Madhubani", "Traditional"],
  }
];