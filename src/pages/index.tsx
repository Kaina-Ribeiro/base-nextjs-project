import Head from 'next/head';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>My page</Title>
    </>
  );
};

export default Home;
Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
