import type { Blog } from '@/types/blog';
import { Button } from '@/components/Button.tsx';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import IconChevronsRight from '@/assets/icons/IconChevronsRight.svg?react';
import IconArrowRight from '@/assets/icons/IconArrowRight.svg?react';
import { SwipeHint } from './SwipeHint';

interface BlogsCarouselProps {
  blogs: Blog[];
}

export const BlogsCarousel = ({ blogs }: BlogsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {blogs.map((blog, index) => (
            <div key={index} className="w-full shrink-0 px-4">
              <img
                src={blog.data.coverImageUrl}
                alt={blog.data.title}
                height={100}
                className="mb-4 h-56 w-full rounded-lg object-cover"
              />
              <h3 className="mb-4 text-xl font-bold">{blog.data.title}</h3>
              <p className="mb-2">{blog.data.description}</p>
              <Button
                href={`/blog/${blog.slug}`}
                type="anchor"
                text="Leer más"
                style="secondary-simple"
                iconRight={<IconChevronsRight className="h-6 w-6 pt-1" />}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-10 px-3">
        <div onClick={scrollPrev}>
          <IconArrowRight className="h-6 w-6 rotate-180" />
        </div>
        <div onClick={scrollNext}>
          <IconArrowRight className="h-6 w-6" />
        </div>
      </div>

      <SwipeHint />
    </div>
  );
};
