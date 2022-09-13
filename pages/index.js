import Layout from '../layout/layout';

import Manset from '../component/web/manset/manset';
import Installiation from '../component/web/installiation/installiation.jsx';
import Wave from '../component/web/wave/wave';
import Features from '../component/web/features/features';
import Creative from '../component/web/creative/creative';
import Note_Management from '../component/web/Note-Management/Note-Management';
import Dark_Theme from '../component/web/Dark-Theme/Dark-Theme';
import Popular_Apps from '../component/web/Popular-Apps/Popular-Apps';
import Stori from '../component/web/stori/stori';
import Customer from '../component/web/customer/customer';
import Line_element from '../component/web/line-element/line-element';
import Price from '../component/web/Price/Price';
import Support from '../component/web/support/support';

import Community from '../component/web/community/community';
import Footer from '../component/web/footer/footer';



export default function Home() {
  return (
    <Layout hasHeader={true}>
      <Manset />
      <Wave />
      <Installiation />
      <Features />
      <Creative />
      <Note_Management />
      <Dark_Theme />
      <Popular_Apps />
      <Stori />
      <Customer />
      <Line_element />
      <Price />
      <Support />
      <Community />
      <Footer />
    </Layout>
  )
}
