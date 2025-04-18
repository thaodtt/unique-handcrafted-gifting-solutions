import { Artwork } from '@/types/artwork';
import { artworks } from '@/data/artworks';

export const getSearchEndpoint = (searchQuery: string) => `/search/${searchQuery}`;

export const getSearchByQuery = async (searchQuery: string): Promise<Artwork[]> => {
  {
    /* Use mock data, change this during BE integration */
  }
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
};
