import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import 'antd/dist/reset.css';
import 'antd-mobile/es/global';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
