import Header from '../components/Header';
import Service from '../components/Service';
import Experience from '../components/Experience';
import Property from '../components/Property';
import Subscribe from '../components/Subscribe';
import PageTransition from '../components/PageTransition';

const Home = () => (
  <PageTransition>
    <Header />
    <Service />
    <Experience />
    <Property />
    <Subscribe />
  </PageTransition>
);

export default Home;
