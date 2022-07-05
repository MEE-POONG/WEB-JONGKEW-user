import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';

import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (

    <NextUIProvider>
      <RecoilRoot>
          <Component {...pageProps} />
      </RecoilRoot>
    </NextUIProvider>

  );
}

export default MyApp;