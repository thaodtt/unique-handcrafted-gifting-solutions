'use client';

import ArtworkCard from '@/components/core/ArtworkCard'; // Import the card component
import { Artwork } from '@/types/artwork'; // Import the type
import { useState, useEffect, useCallback, useMemo } from 'react';

interface GalleryProps {
  artworks: Artwork[];
}

export default function Gallery({ artworks }: GalleryProps) {
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  // filter options depends on search results, use useMemo to avoid recalculating on every render
  const allCategories = useMemo(() => [...new Set(artworks.flatMap((artwork) => artwork.categories))], [artworks]);
  const allTypes = useMemo(() => [...new Set(artworks.map((artwork) => artwork.type))], [artworks]);

  const filterArtworks = useCallback(
    (category: string, type: string) => {
      return artworks.filter((artwork) => {
        const matchesCategory = category ? artwork.categories.includes(category) : true;
        const matchesType = type ? artwork.type === type : true;
        return matchesCategory && matchesType;
      });
    },
    [artworks]
  );

  useEffect(() => {
    setFilteredArtworks(filterArtworks(category as string, type as string));
  }, [category, type, filterArtworks]);

  return (
    <div>
      <div className="text-center mb-8">
        <select value={(type as string) || ''} onChange={(e) => setType(e.target.value)} className="border rounded p-2">
          <option value="">All Product Types</option>
          {allTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={(category as string) || ''}
          onChange={(e) => setCategory(e.target.value)}
          className="mr-2 border rounded p-2"
        >
          <option value="">All Categories</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* Grid layout for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
}
