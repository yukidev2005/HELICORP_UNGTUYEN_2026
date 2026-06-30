import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <div className='w-full relative'>
      <img
        className=' h-dvh  w-full object-cover '
        src='./ban-phim-co-wave75-4.webp'
        alt='hero-section-image'
      />
      <div className=' absolute  top-0 left-0 right-0 bottom-0 bg-black/50'></div>

      <HeroContent />
    </div>
  );
}

const HeroContent = () => {
  return (
    <div className=' absolute grid  place-items-center  top-0 left-0 bottom-0 right-0 '>
      <div className='text-white text-center  space-y-2 '>
        <h1 className='  text-5xl  font-bold'>PMO Wave75 Custom Keyboard</h1>
        <p>
          Bringing the ultimate custom keyboard experience to an affordable
          price point.
        </p>

        <Button className='bg-white  hover:bg-white text-black text-black'>
          More Info
        </Button>
      </div>
    </div>
  );
};
