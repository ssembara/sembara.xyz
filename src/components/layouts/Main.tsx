import * as React from 'react';
import Head from 'next/head';
import Navbar from '../NavBar';
import { Box } from '@chakra-ui/react';

interface MainProps {
    childern: any,
    router: any
}
const Main: React.FC<MainProps> = ({ childern, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sembara's homepage" />
        <meta name="author" content="Sebastianus Sembara" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ssembara99" />
        <meta name="twitter:creator" content="@@ssembara99" />
        {/* <meta name="twitter:image" content="/card.png" /> */}
        <meta property="og:site_name" content="Sebastianus Sembara's Homepage" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/card.png" /> */}
        <title>Sebastianus Sembara - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
    </Box>

    
  );
};

export default Main
