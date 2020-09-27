import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>AccountaPal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/login">Login</Link>
    </>
  );
};

export default Home;
