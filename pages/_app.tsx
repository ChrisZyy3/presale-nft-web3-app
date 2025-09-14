import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProvider as AntdMobileConfigProvider } from 'antd-mobile';
import themeTokens from '../lib/theme';
import 'antd/dist/reset.css';
import 'antd-mobile/es/global';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AntdConfigProvider theme={{ token: themeTokens }}>
      <AntdMobileConfigProvider
        theme={{
          '--adm-color-primary': themeTokens.colorPrimary,
          '--adm-border-radius': `${themeTokens.borderRadius}px`,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AntdMobileConfigProvider>
    </AntdConfigProvider>
  );
}
