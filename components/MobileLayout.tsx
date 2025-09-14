import { ReactNode, CSSProperties } from 'react';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  PayCircleOutline,
  ShopbagOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
}

const tabs = [
  {
    key: '/',
    title: 'Home',
    icon: (active: boolean) => (
      <AppOutline style={{ color: active ? 'var(--adm-color-primary)' : undefined }} />
    ),
  },
  {
    key: '/mint',
    title: 'Mint',
    icon: (active: boolean) => (
      <PayCircleOutline style={{ color: active ? 'var(--adm-color-primary)' : undefined }} />
    ),
  },
  {
    key: '/mall',
    title: 'Mall',
    icon: (active: boolean) => (
      <ShopbagOutline style={{ color: active ? 'var(--adm-color-primary)' : undefined }} />
    ),
  },
  {
    key: '/wallet',
    title: 'Wallet',
    icon: (active: boolean) => (
      <UserOutline style={{ color: active ? 'var(--adm-color-primary)' : undefined }} />
    ),
  },
];

const tabBarStyle: React.CSSProperties & {
  '--active-color'?: string;
  '--bg-color'?: string;
  '--height'?: string;
} = {
  '--active-color': 'var(--adm-color-primary)',
  '--bg-color': '#fff',
  '--height': '60px',
  borderTop: '1px solid #eee',
};

export default function MobileLayout({ children }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto">{children}</div>
      <TabBar
        activeKey={router.pathname}
        onChange={key => router.push(key)}
        style={tabBarStyle}
      >
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}
