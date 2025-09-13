import Head from 'next/head';

export default function Mall() {
  return (
    <div className="p-4">
      <Head>
        <title>Mall</title>
      </Head>
      <h1 className="text-xl font-bold mb-4">Mall Page</h1>
      <p>Browse NFTs in the mall.</p>
    </div>
  );
}
