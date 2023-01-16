import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import UserAuth from "../components/UserAuth";

const Home = () => {
  return (
    <>
      <Head>
        <title>Arrimo App</title>
        <meta name="description" content="Generated Arroimo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 d-none  d-lg-block">
            <Image
              src="/assets/images/login.svg"
              alt="Login Picture"
              width={500}
              height={500}
            />
          </div>
          <div className="col-md-7 ">
            <UserAuth />
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
