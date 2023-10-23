import Link from 'next/link';
import { languages, fallbackLng } from '../i18n/settings';

import Introduction from '@/components/home/introduction';
import PageProps from '@/interfaces/page-props';

const Home = async (props: PageProps) => {
  const { params } = props;
  let lng = params.lng;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return <Introduction lng={lng} />;
};

export default Home;
