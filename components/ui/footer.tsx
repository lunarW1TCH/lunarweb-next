'use-client';
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Props from '@/interfaces/props';

import styles from './footer-styles';

const Footer = (props: Props) => {
  const { lng } = props;
  const classes = styles();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLang, setSelectedLang] = useState(lng);

  const changeLanguageHandler = (value: string) => {
    setSelectedLang(value);

    const newPath = pathname.slice(3, pathname.length);
    router.push(`/${value}${newPath}`);
  };

  return (
    <footer className={classes.footer}>
      <span className={classes.detailsContainer}>
        Copyright 2023 &copy; Adrian Żegnałek
        <br />
        <a href='	https://fontawesome.com/'>Icons by Font Awesome</a>
      </span>
      <Select value={selectedLang} onValueChange={changeLanguageHandler}>
        <SelectTrigger w='180px'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='en'>English</SelectItem>
          <SelectItem value='pl'>Polski</SelectItem>
        </SelectContent>
      </Select>
    </footer>
  );
};

export default Footer;
