import Content from '../../components/content';
import Footer from '../../components/footer';
import Header from '../../components/header';

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <div className='container'>
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
