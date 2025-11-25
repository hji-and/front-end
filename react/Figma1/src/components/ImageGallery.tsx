import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryImage {
  url: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  layout: 'horizontal' | 'single';
}

export function ImageGallery({ images, layout }: ImageGalleryProps) {
  if (layout === 'single') {
    return (
      <section className="ml-80 bg-white px-16 py-12">
        <div className="max-w-4xl">
          <ImageWithFallback 
            src={images[0].url}
            alt={images[0].alt}
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="ml-80 bg-white px-16 py-12">
      <div className="max-w-4xl">
        <div className="grid grid-cols-2 gap-6">
          {images.map((image, index) => (
            <ImageWithFallback 
              key={index}
              src={image.url}
              alt={image.alt}
              className="w-full h-[400px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
