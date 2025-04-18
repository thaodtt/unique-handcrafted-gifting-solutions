// src/components/ArtworkCard.tsx
'use client'; // Needed for Dialog interaction

import Image from 'next/image';
import { Artwork } from '@/types/artwork';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter, // Optional: For close button inside dialog
  DialogClose, // Optional: For close button inside dialog
} from '@/components/ui/dialog';

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Dialog>
      {' '}
      {/* Wrap the card or trigger element */}
      <Card className="overflow-hidden flex flex-col h-full">
        {' '}
        {/* Ensure card takes full height */}
        <CardHeader>
          <CardTitle>{artwork.name}</CardTitle>
          <CardDescription>{artwork.material}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {' '}
          {/* Allow content to grow */}
          <div className="relative aspect-square mb-4">
            {' '}
            {/* Aspect ratio container */}
            <Image
              src={artwork.imageUrl}
              alt={artwork.name}
              fill // Use fill layout
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
              style={{ objectFit: 'cover' }} // Cover ensures image fills space
              className="rounded-md"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-2">Dimensions: {artwork.dimension}</p>
          {/* Keep description short here, show full in Dialog */}
          <p className="text-sm line-clamp-3">{artwork.description}</p>
        </CardContent>
        <CardFooter>
          {/* DialogTrigger wraps the button that opens the dialog */}
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      {/* Dialog Content - This appears when the trigger is clicked */}
      <DialogContent className="sm:max-w-[700px]">
        {' '}
        {/* Adjust max width */}
        <DialogHeader>
          <DialogTitle>{artwork.name}</DialogTitle>
          <DialogDescription>
            {artwork.material} | {artwork.dimension}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative aspect-video w-full">
            {' '}
            {/* Different aspect ratio for dialog */}
            <Image
              src={artwork.imageUrl}
              alt={artwork.name}
              fill
              sizes="(max-width: 1000px) 200vw, 700px" // Adjust sizes for dialog
              style={{ objectFit: 'contain' }} // Contain fits image within bounds
              className="rounded-md"
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Description:</h4>
            <p className="text-sm">{artwork.description}</p>
          </div>
          {/* You could add category tags here */}
          <div className="flex flex-wrap gap-2 mt-2">
            {artwork.categories.map((category) => (
              <span key={category} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                {category}
              </span>
            ))}
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded capitalize">{artwork.type}</span>
          </div>
        </div>
        <DialogFooter>
          {/* Optional: Explicit close button */}
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
