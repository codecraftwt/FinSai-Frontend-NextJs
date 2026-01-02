import StoreProvider from '../store/StoreProvider';
import ScrollToTop from '../components/ScrollToTop';
import '../globals.css';

export const metadata = {
  title: 'Finsai - Trade Secure',
  description: 'Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StoreProvider>
          <ScrollToTop />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

