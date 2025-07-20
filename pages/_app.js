import '../styles/globals.css'
import Head from 'next/head';
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    
    <QueryClientProvider client={queryClient}>
        <Head>
        {/* Global Meta Title and Description */}
        <title>Jatin Sehgal | Full-Stack Developer & UI/UX Designer Portfolio</title>
        <meta name="description" content="Explore the portfolio of Jatin Sehgal, a full-stack web developer and UI/UX designer. Discover innovative projects, modern web designs, and clean code tailored for seamless digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for link previews */}
        <meta property="og:title" content="Jatin Sehgal | Full-Stack Developer & UI/UX Designer Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Jatin Sehgal, a full-stack web developer and UI/UX designer. Discover innovative projects, modern web designs, and clean code tailored for seamless digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" /> {/* 🔁 Replace with your actual domain */}
        <meta property="og:image" content="https://instagram.fixc5-2.fna.fbcdn.net/v/t51.2885-19/508350440_18392523763191813_8896198363933576062_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fixc5-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QGULFfP6xxeSY-yQ61tLCbla9jAPhiejvBYV5tzDSPZw6VxQYgo9dZHXYqIUSqw1yayG-BAbu3oO1FwslHMqdn9&_nc_ohc=V6j-R-02ol0Q7kNvwESKdcP&_nc_gid=9WVUNWIcVc0J7p0JxSsMlw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfRMxiNznNmTMQl40mzzsZNEzUzb2QNPjiSkYAC4CfayZw&oe=6882B8E7&_nc_sid=10d13b" /> {/* 🔁 Replace with your image */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jatin Sehgal | Full-Stack Developer & UI/UX Designer Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Jatin Sehgal, a full-stack web developer and UI/UX designer. Discover innovative projects, modern web designs, and clean code tailored for seamless digital experiences." />
        <meta name="twitter:image" content="https://instagram.fixc5-2.fna.fbcdn.net/v/t51.2885-19/508350440_18392523763191813_8896198363933576062_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fixc5-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QGULFfP6xxeSY-yQ61tLCbla9jAPhiejvBYV5tzDSPZw6VxQYgo9dZHXYqIUSqw1yayG-BAbu3oO1FwslHMqdn9&_nc_ohc=V6j-R-02ol0Q7kNvwESKdcP&_nc_gid=9WVUNWIcVc0J7p0JxSsMlw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfRMxiNznNmTMQl40mzzsZNEzUzb2QNPjiSkYAC4CfayZw&oe=6882B8E7&_nc_sid=10d13b" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
