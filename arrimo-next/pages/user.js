import Head from "next/head";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <div>
      <div>Contact...</div>
    </div>
  );
};

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Contact;
