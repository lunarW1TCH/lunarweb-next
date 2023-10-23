import Link from 'next/link';

interface PageProps {
  params: {
    lng: string;
  };
}

const Page = (props: PageProps) => {
  const { lng } = props.params;

  return (
    <>
      <h1>Second page!</h1>
      <Link href={`/${lng}`}>second page</Link>
    </>
  );
};

export default Page;
