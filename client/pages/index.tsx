import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>
      <main>
        <Sidebar />
      </main>
    </div>
  );
};

export default Home;
