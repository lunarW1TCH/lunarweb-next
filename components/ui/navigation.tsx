/** @jsxImportSource @emotion/react */
import Link from 'next/link';

import styles from '@/styles/components/ui/navigation';

const Navigation = () => {
  return (
    <nav css={styles.navContainer}>
      <ul css={styles.navList}>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/skills'>Skills</Link>
        <Link href='/contact'>Contact</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
