import { dir } from 'i18next';
import { languages } from '@/app/i18n/settings';
import '../global.css';
import { Metadata } from 'next';

import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

import styles from './layout-styles';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export const metadata: Metadata = {
  title: 'Lunarweb - Adrian Żegnałek',
  description: 'A software developer from Poznań.',
};

const Layout = (props: LayoutProps) => {
  const { children, params } = props;
  const classes = styles();

  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <body>
        <div className={classes.rootContainer}>
          <Navigation lng={params.lng} />
          <main className={classes.mainContainer}>{children}</main>
          <Footer lng={params.lng} />
        </div>
      </body>
    </html>
  );
};

export default Layout;

export const generateStaticParams = () => {
  return languages.map(lng => ({ lng }));
};
