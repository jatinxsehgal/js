import '../styles/globals.css'
import Head from 'next/head';
import Layout from './layout'
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {

  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Come Back Please 😢';
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (

    
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Jatin Sehgal | Full-Stack Developer & UI/UX Designer Portfolio</title>
        <meta name="description" content="Explore the portfolio of Jatin Sehgal, a full-stack web developer and UI/UX designer. Discover innovative projects, modern web designs, and clean code tailored for seamless digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Jatin Sehgal | Full-Stack Developer & UI/UX Designer Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Jatin Sehgal, a full-stack web developer and UI/UX designer. Discover innovative projects, modern web designs, and clean code tailored for seamless digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sehgal.netlify.app/" />
        <meta property="og:image" content="https://instagram.fixc5-2.fna.fbcdn.net/v/t51.2885-19/508350440_18392523763191813_8896198363933576062_n.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jatin Sehgal | Full-Stack Developer & UI/UX Designer Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Jatin Sehgal, a full-stack web developer and UI/UX designer. Discover innovative projects, modern web designs, and clean code tailored for seamless digital experiences." />
        <meta name="twitter:image" content="https://instagram.fixc5-2.fna.fbcdn.net/v/t51.2885-19/508350440_18392523763191813_8896198363933576062_n.jpg" />
      </Head>
      <Layout>
        
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
