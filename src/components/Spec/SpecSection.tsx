import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { wave75Specs } from '@/lib/data';

export default function SpecSection() {
  return (
    <section
      id='specs'
      className='relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 -left-32 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl' />
        <div className='absolute bottom-20 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl' />
      </div>

      <div className='relative 2xl:max-w-7xl max-w-6xl mx-auto'>
        {/* Section Header */}
        <SpecHeader />

        <div className='flex flex-col xl:flex-row gap-12 xl:gap-16 items-start'>
          <div className='w-full xl:w-[48%]'>
            <img
              src='./images/specs.webp'
              alt='PMO Wave75 Specifications'
              className='w-full h-auto object-cover '
            />
          </div>

          {/* Specs Side */}
          <div className='flex-1 w-full'>
            <SpecGrid />
          </div>
        </div>
      </div>
    </section>
  );
}

const SpecHeader = () => {
  return (
    <div className='text-center mb-16 xl:mb-20'>
      <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-500 text-sm font-medium tracking-wide mb-6'>
        <span className='w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse' />
        SPECIFICATIONS
      </span>
      <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
        <span className='text-foreground'>Technical </span>
        <span className='bg-linear-to-r from-pink-400 via-violet-400 to-pink-500 bg-clip-text text-transparent'>
          Specs
        </span>
      </h2>
      <p className='mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed'>
        Full technical specifications — structure, materials, connections, and
        software.
      </p>
    </div>
  );
};

const SpecGrid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
      {wave75Specs.map(({ details, title }) => (
        <SpecCard key={title} title={title} details={details} />
      ))}
    </div>
  );
};

interface SpecCardProps {
  title: string;
  details: string;
}

const SpecCard = ({ title, details }: SpecCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>{details}</p>
      </CardContent>
    </Card>
  );
};
