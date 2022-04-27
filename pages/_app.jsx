import '../styles/globals.css'
import { CartProvider } from 'react-use-cart'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" >
       <CartProvider>
      <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>


  )
}

export default MyApp