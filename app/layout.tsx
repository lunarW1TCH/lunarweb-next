import './global.css';
import { Metadata } from 'next';

import Navigation from '@/components/ui/navigation';

import styles from './layout-styles';

export const metadata: Metadata = {
  title: 'Lunarweb - Adrian Żegnałek',
  description: 'A software developer from Poznań.',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: LayoutProps) {
  const { children } = props;

  const classes = styles();

  return (
    <html lang='en'>
      <body>
        <div className={classes.rootContainer}>
          <Navigation />
          <main className={classes.mainContainer}>{children}</main>
          <footer className={classes.footer}>
            Copyright 2023 &copy; Adrian Żegnałek{' '}
            <a href='	https://fontawesome.com/'>Icons by Font Awesome</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
