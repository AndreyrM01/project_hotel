import { Providers } from './providers';
import MainContent from './componets/MainContent';

export const metadata = {
  title: 'Hotel',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <MainContent>{children}</MainContent>
        </Providers>
      </body>
    </html>
  );
}