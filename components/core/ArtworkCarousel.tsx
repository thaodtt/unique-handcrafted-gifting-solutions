import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Artwork } from '@/types/artwork';
import ArtworkCard from '@/components/core/ArtworkCard';

interface ArtworkCarouselProps {
  heading: string;
  artworks: Artwork[];
}

const ArtworkCarousel: React.FC<ArtworkCarouselProps> = ({ heading, artworks }) => {
  return (
    <div className="p-8 m-4">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <Carousel>
        <CarouselContent className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          {artworks.map((artwork, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <ArtworkCard key={artwork.id} artwork={artwork} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ArtworkCarousel;
