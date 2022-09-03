import Head from "next/head";
import Home from "components/pages/home/Home";

const Index = ({ lang }) => {

  return (
    <>
      <Head>
        <title>ホーム | 大塚遥輝のポートフォリオ</title>
      </Head>

      <Home lang={lang} />
    </>
  )
}

export default Index;