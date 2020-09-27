import Head from 'next/head';
import Link from 'next/link';
import { connectToDatabase } from '../util/mongodb';

const Home = ({ isConnected }) => {
  return (
    <>
      <Head>
        <title>AccountaPal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isConnected ? (
        <Link href="/login">Login</Link>
      ) : (
        <h1>Database not connected.</h1>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { client } = await connectToDatabase();
  const isConnected = await client.isConnected(); // Returns true or false
  return {
    props: { isConnected },
  };
};

export default Home;
