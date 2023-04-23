import SSRProvider from 'react-bootstrap/SSRProvider';
import { Provider } from 'react-redux'
import '@/styles/globals.css'
import '@/styles/cart.css'
import '@/styles/heroCarousel.css'
import '@/styles/checkout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "keen-slider/keen-slider.min.css"
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Layout from '@/components/layout';
import NextNProgress from 'nextjs-progressbar';
import store from '@/store/store';
import  { ContextProviderS } from '@/store/context/AllContext';

export default function App({ Component, pageProps }) {
  return (
   <SSRProvider>
     <Provider store={store}>
     <ContextProviderS>
   <Layout >
   <NextNProgress color="#f90" startPosition={0.3} stopDelayMs={200}  height={4} showOnShallow={true} />
      <Component {...pageProps} />
      </Layout>
      </ContextProviderS>
      </Provider>
      </SSRProvider>
  )
}
