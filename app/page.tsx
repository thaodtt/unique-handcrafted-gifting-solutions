import { artworks } from '@/data/artworks'; // Import your data
import ArtworkCarousel from '@/components/core/ArtworkCarousel';

function capitalizeFirstLetter(word: string) {
  if (!word) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function HomePage() {
  const categories = [...new Set(artworks.flatMap((artwork) => artwork.categories))];
  const types = [...new Set(artworks.map((artwork) => artwork.type))];
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Welcome to Our Art Gallery</h1>
      <p className="text-center mb-8">Explore our unique handcrafted gifting solutions.</p>
      <ArtworkCarousel heading="Featured Artworks" artworks={artworks} />
      <ArtworkCarousel heading="Most Popular" artworks={artworks} />
      <ArtworkCarousel heading="New Arrivals" artworks={artworks.slice(artworks.length - 5)} />
      <div>
        {types.map((type, index) => (
          <ArtworkCarousel
            key={index}
            heading={capitalizeFirstLetter(type)}
            artworks={artworks.filter((artwork) => artwork.type === type)}
          />
        ))}
      </div>
      <div>
        {categories.map((category, index) => (
          <ArtworkCarousel
            key={index}
            heading={capitalizeFirstLetter(category)}
            artworks={artworks.filter((artwork) => artwork.categories.includes(category))}
          />
        ))}
      </div>
    </div>
  );
}
