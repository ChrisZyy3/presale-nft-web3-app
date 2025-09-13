import Head from 'next/head';

export default function Wallet() {
  return (
    <div className="p-4">
      <Head>
        <title>Wallet</title>
      </Head>
      <h1 className="text-xl font-bold mb-4">Wallet Page</h1>
      <p>View your assets here.</p>
    </div>
  );
}
