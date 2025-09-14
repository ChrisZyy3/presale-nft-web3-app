import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AntdConfigProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AntdConfigProvider>
  );
}
