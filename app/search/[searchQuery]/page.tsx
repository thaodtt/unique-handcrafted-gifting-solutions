'use client';

import { useParams } from 'next/navigation';
import { Artwork } from '@/types/artwork';
import { artworks } from '@/data/artworks';
import Gallery from '@/components/core/Gallery';

function getSearchByQuery(searchQuery: string): Artwork[] {
  const lowerCaseQuery = searchQuery.trim().toLowerCase();
  return artworks.filter((artwork) => {
    return (
      artwork.name.toLowerCase().includes(lowerCaseQuery) ||
      artwork.description.toLowerCase().includes(lowerCaseQuery) ||
      artwork.material.toLowerCase().includes(lowerCaseQuery) ||
      artwork.type.toLowerCase().includes(lowerCaseQuery) ||
      artwork.categories.some((theme) => theme.toLowerCase().includes(lowerCaseQuery))
    );
  });
}

export default function SearchPage() {
  const { searchQuery } = useParams();

  if (!searchQuery) {
    return <div>Invalid search query</div>;
  }

  const searchResults = getSearchByQuery(decodeURI(searchQuery as string));

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Search Results for &#34;{searchQuery}&#34;</h1>
      <Gallery artworks={searchResults} />
    </div>
  );
}
