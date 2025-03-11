// components/Layout.tsx
import { ReactNode } from 'react';
function Layout({ children }: { children: ReactNode }) {
  return <main className="main-books">{children}</main>;
}
export default Layout;
