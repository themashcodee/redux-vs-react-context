import { Context } from "components/context";
import { Redux } from "components/redux";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Context vs Redux</title>
        <meta name="description" content="React Context vs Redux" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="p-12 w-full flex flex-col h-screen gap-8">
        <h1 className="sm:text-4xl text-xl font-semibold border-b-[2px] border-slate-900">
          React Context vs Redux
        </h1>

        <div className="w-full flex flex-col sm:flex-row gap-12 h-full">
          <Context />
          <Redux />
        </div>
      </main>
    </>
  );
};

export default Home;
