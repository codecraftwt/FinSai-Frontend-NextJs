import StoreProvider from '../store/StoreProvider';
import ScrollToTop from '../components/ScrollToTop';
import '../globals.css';

// Optional: Root metadata for consistent branding across all pages
export const metadata = {
  title: {
    default: 'Finsai - Trade Secure',
    template: '%s | Finsai'
  },
  description: 'Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body >
        <StoreProvider>
          <ScrollToTop />
          {children}
        </StoreProvider>
      <link rel="icon" href="/favicon.ico" />
      </body>
    </html>
  );
}

