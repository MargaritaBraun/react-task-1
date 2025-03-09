// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/topComponents/TopSection';
import ReduxProvider from 'src/Redux/ReduxProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Header />
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;