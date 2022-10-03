import { Container } from '@chakra-ui/react';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainRoutes from './routes/MainRoutes';
function App() {
  return (
    <Container maxW='100%' padding='0px'>
      <Navbar/>
      <MainRoutes/>
      <BottomNav/>
      <Footer/>
    </Container>
  );
}

export default App;
