'use-client';
'use client';

import Props from '@/interfaces/props';
import styles from './footer-styles';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Footer = (props: Props) => {
  const { lng } = props;
  const classes = styles();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLang, setSelectedLang] = useState(lng);

  const changeLanguageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setSelectedLang(value);

    const newPath = pathname.slice(3, pathname.length);
    router.push(`/${value}${newPath}`);
  };

  return (
    <footer className={classes.footer}>
      <span className={classes.detailsContainer} >
        Copyright 2023 &copy; Adrian Żegnałek
        <br />
        <a href='	https://fontawesome.com/'>Icons by Font Awesome</a>
      </span>
      <select
        value={selectedLang}
        onChange={changeLanguageHandler}
        name='language'
        className={classes.langSelect}
      >
        <option value='en'>English</option>
        <option value='pl'>Polski</option>
      </select>
    </footer>
  );
};

export default Footer;
