import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ArtworkCard from '@/components/core/ArtworkCard';
import { Artwork } from '@/types/artwork';
import { getSearchByQuery, getSearchEndpoint } from '@/api/search-service';
import { useQuery } from '@tanstack/react-query';


interface SearchProps {
  searchQuery: string;
}

export default function SearchResults({ searchQuery }: SearchProps) {
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Artwork[]>([]);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: [getSearchEndpoint(searchQuery)],
    queryFn: () => getSearchByQuery(searchQuery),
  });
  useEffect(() => {
    if (data) {
      setSearchResults(data);
    } else {
      setSearchResults([]);
    }
  }, [data]);

  // filter options depends on search results, use useMemo to avoid recalculating on every render
  const allCategories = useMemo(() => [...new Set(searchResults.flatMap((artwork) => artwork.categories))], [searchResults]);
  const allTypes = useMemo(() => [...new Set(searchResults.map((artwork) => artwork.type))], [searchResults]);

  const filterArtworks = useCallback(
    (category: string, type: string) => {
      return searchResults.filter((artwork) => {
        const matchesCategory = category ? artwork.categories.includes(category) : true;
        const matchesType = type ? artwork.type === type : true;
        return matchesCategory && matchesType;
      });
    },
    [searchResults]
  );

  useEffect(() => {
    setFilteredArtworks(filterArtworks(category as string, type as string));
  }, [category, type, filterArtworks]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <main className="p-4">
        {/*product type filter*/}
        <div className="flex mb-4">
          <select
            value={(type as string) || ''}
            onChange={(e) => setType(e.target.value)}
            className="border rounded p-2"
          >
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
        {/* Search results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtworks.map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
              </div>
      </main>
    </div>
  );
}
