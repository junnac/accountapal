import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

const Login = () => {
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
};

export default Login;
