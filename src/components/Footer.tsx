import { Discord } from '@/components/Icons/Discord';
import { Instagram } from '@/components/Icons/Instagram';
import { XformerlyTwitter } from '@/components/Icons/XformerlyTwitter';
import { Link } from 'react-router';

const socialLinks = [
  {
    title: 'Discord',
    href: '#',
    icon: <Discord />,
  },
  {
    title: 'Twitter',
    href: '#',
    icon: <XformerlyTwitter />,
  },
  {
    title: 'Instagram',
    href: '#',
    icon: <Instagram />,
  },
];

export default function Footer() {
  return (
    <footer className='border-t border-foreground/5'>
      <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8'>
          {/* Brand Column */}
          <div className='md:col-span-5'>
            <h2 className='text-2xl font-bold tracking-tight'>
              <span className='bg-linear-to-r from-pink-400 via-violet-400 to-pink-500 bg-clip-text text-transparent'>
                PMO
              </span>
            </h2>
            <p className='mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm'>
              Premium custom keyboards designed for enthusiasts. Engineered with
              precision CNC aluminum and hot-swappable technology.
            </p>

            {/* Social Icons */}
            <div className='mt-6 flex items-center gap-3'>
              {socialLinks.map(({ title, href, icon }) => (
                <Link
                  key={title}
                  to={href}
                  className='w-9 h-9 rounded-lg bg-foreground/5 border border-foreground/5 flex items-center justify-center text-muted-foreground hover:text-pink-400 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300'
                  aria-label={title}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='py-6 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-xs text-muted-foreground'>
            © {new Date().getFullYear()} PMO Engineering. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                to='#'
                className='text-xs text-muted-foreground hover:text-foreground transition-colors duration-300'
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
