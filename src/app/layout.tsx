import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/google-analytics';
import Navigation from '@/components/navigation';
import Provider from '@/components/provider';
import UmamiAnalytics from '@/components/umami-analytics';
import { cn } from '@/lib/utils';
import '@/styles/app.css';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { appConfig } from '../../app.config';

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.url),
  title: {
    default: appConfig.name,
    template: `%s | ${appConfig.name}`, // Allows flexible page-specific titles
  },
  description:
    'Aung Pyae Phyo - Developer, engineer, and creator specializing in modern web technologies.',
  keywords: [
    'Aung Pyae Phyo',
    'aungpyaephyo',
    'aungpyaephyo.com',
    'Aung Phyo',
    'Aung Pyae',
    'Kyaukse tech',
    'Aung Pyae Phyo blog',
    'Kyaukse engineer',
    'frontend developer',
    'backend developer',
    'Kyaukse software engineer',
    'Aung Pyae Phyo',
  ],
  openGraph: {
    title: appConfig.name,
    description:
      'Developer, engineer, and creator specializing in modern web technologies.',
    url: appConfig.url,
    siteName: appConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: appConfig.name,
    description:
      'Developer, engineer, and creator specializing in modern web technologies.',
    images: [`${appConfig.url}/twitter-card.png`], // Replace with actual Twitter card image URL
  },
  verification: {
    google: '2V6fAI1xHZSNoMAr4vucaI7TjftUZGhAlcGWu0MHMDw', // Google verification meta tag value
    yandex: 'YOUR_YANDAX_VERIFICATION_CODE', // Add Yandax verification if required
  },
};

const Jetbrains_mono = localFont({
  src: './mono.woff2',
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(Jetbrains_mono.className)}
    >
      <body
        suppressHydrationWarning
        className={cn(
          'bg-white/50 text-black antialiased dark:bg-[#111010]  dark:text-white  tracking-tight'
        )}
      >
        <Provider>
          <main
            className={cn(
              'flex min-h-dvh w-full  flex-col items-center justify-center '
            )}
          >
            <Navigation />
            <section className='flex w-full flex-1 flex-col max-w-screen-md mx-auto px-4'>
              {children}
            </section>
            <Footer />
          </main>
        </Provider>
        <GoogleAnalytics />
        <UmamiAnalytics />
        <VercelAnalytics mode={'production'} />
        <SpeedInsights />
      </body>
    </html>
  );
}
