import Head from "next/head";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Arrimo App</title>
        <meta name="description" content="Generated Arroimo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>App...</div>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
