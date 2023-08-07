/** @jsxImportSource @emotion/react */
import Navigation from '../ui/navigation';
import styles from '@/styles/components/layout/layout';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div css={styles.rootContainer}>
      <Navigation />
      <main css={styles.mainContainer}>{children}</main>
      <footer css={styles.footer}>
        Copyright 2023 &copy; Adrian Żegnałek{' '}
        <a href='	https://fontawesome.com/'>Icons by Font Awesome</a>
      </footer>
    </div>
  );
};

export default Layout;
