'use client';

import { artworks } from '@/data/artworks';
import Gallery from '@/components/core/Gallery';

export default function ArtWork() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Our Artworks</h1>
      <p className="text-center mb-8">Explore our artworks filtered by product type and category</p>
      <Gallery artworks={artworks} />
    </div>
  );
}
