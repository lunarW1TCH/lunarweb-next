'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaHome } from 'react-icons/fa';

import { useTranslation } from '@/app/i18n/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Props from '@/interfaces/props';
import { HStack, VStack } from '@shadow-panda/styled-system/jsx';

import { Button } from './button';
import styles from './navigation-styles';

const Navigation = (props: Props) => {
  const { lng } = props;
  const { t } = useTranslation(lng, 'ui');
  const classes = styles();
  const pathname = usePathname();

  return (
    <nav className={classes.navContainer}>
      <ul className={classes.navList}>
        <Button size='icon' variant='ghost' asChild>
          <Link href={`/${lng}`}>
            <FaHome />
          </Link>
        </Button>
        <HStack className={classes.desktopNav} width='100%'>
          <Button className={classes.link} variant='ghost' asChild>
            <Link href={`/${lng}/projects`}>{t('nav.projects')}</Link>
          </Button>
          <Button className={classes.link} variant='ghost' asChild>
            <Link href={`/${lng}/skills`}>{t('nav.skills')}</Link>
          </Button>
          <Button className={classes.link} variant='ghost' asChild>
            <Link href={`/${lng}/contact`}>{t('nav.contact')}</Link>
          </Button>
        </HStack>
        <DropdownMenu>
          <DropdownMenuTrigger className={classes.mobileNav} asChild>
            <Button size='icon' variant='ghost'>
              <VStack>
                <FaBars />
              </VStack>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent color='primary.700'>
            <DropdownMenuItem>
              <Button className={classes.link} variant='ghost' asChild>
                <Link href={`/${lng}/projects`}>{t('nav.projects')}</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button className={classes.link} variant='ghost' asChild>
                <Link href={`/${lng}/skills`}>{t('nav.skills')}</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button className={classes.link} variant='ghost' asChild>
                <Link href={`/${lng}/contact`}>{t('nav.contact')}</Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </nav>
  );
};

export default Navigation;
