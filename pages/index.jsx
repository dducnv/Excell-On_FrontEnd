import React,{useEffect} from 'react';
import HeadPage from '../components/user_layout/HeadPage';
import Layout from '../components/user_layout/Layout';
import Services from '../components/user_layout/components/Services';
import Stat from '../components/user_layout/components/Stat';
import Feedback from '../components/user_layout/components/Feedback';



export default function Home() {
  return (
    <>
      <Layout>
        <HeadPage />
        <Services/>
        <Stat/>
        <Feedback/>
      </Layout>
    </>
  )
}
