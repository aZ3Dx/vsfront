import useEmblaCarousel from 'embla-carousel-react';
import { CLIENTS } from '@/consts/clients';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export const ClientsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {CLIENTS.map((client, index) => (
          <div key={index} className="shrink-0 px-4">
            <img src={client.image.src} alt={client.name} height={100} className="h-24 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};
