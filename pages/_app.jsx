import '../styles/globals.css'
import { CartProvider } from 'react-use-cart'
import { ThemeProvider } from 'next-themes'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ThemeProvider attribute="class" >
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>


    )
  }
}

export default MyApp