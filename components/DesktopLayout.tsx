import { ReactNode } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
}

const items = [
  { key: '/', label: <Link href="/">Home</Link> },
  { key: '/mint', label: <Link href="/mint">Mint</Link> },
  { key: '/mall', label: <Link href="/mall">Mall</Link> },
  { key: '/wallet', label: <Link href="/wallet">Wallet</Link> },
];

export default function DesktopLayout({ children }: Props) {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <Menu mode="horizontal" selectedKeys={[router.pathname]} items={items} />
      <div className="p-4">{children}</div>
    </div>
  );
}
