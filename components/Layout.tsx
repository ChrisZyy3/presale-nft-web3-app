import { ReactNode } from 'react';
import { Grid } from 'antd';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;
  return isMobile ? <MobileLayout>{children}</MobileLayout> : <DesktopLayout>{children}</DesktopLayout>;
}
