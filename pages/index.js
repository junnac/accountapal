import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb'
import { signIn, signOut, useSession } from 'next-auth/client';

const Home = () => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>AccountaPal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  const { client } = await connectToDatabase();
  const isConnected = await client.isConnected(); // Returns true or false
  return {
    props: { isConnected },
  };
};

export default Home;