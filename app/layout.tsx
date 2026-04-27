import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SplashLayoutWrapper from '../components/SplashLayoutWrapper';
import PageTransition from '../components/PageTransition';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';
import { ColorProvider } from '../store/colorStore';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'The Bunker | Tactical Armory',
  description: 'Engineered for Precision. Built for the Field.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="font-sans antialiased bg-[#080A0C] text-[#F0EDE8]" suppressHydrationWarning>
        <SplashLayoutWrapper>
          <ColorProvider>
            <CartDrawer />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </ColorProvider>
        </SplashLayoutWrapper>
      </body>
    </html>
  );
}

