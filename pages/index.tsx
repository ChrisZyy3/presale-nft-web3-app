import Head from 'next/head';

export default function Home() {
  return (
    <div className="p-4">
      <Head>
        <title>Home</title>
      </Head>
      <div className="mb-4">
        <video
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          autoPlay
          loop
          muted
          className="w-full h-48 object-cover"
        />
      </div>
      <hr className="my-4" />
      <p className="text-center">Welcome to our NFT presale dApp.</p>
    </div>
  );
}
