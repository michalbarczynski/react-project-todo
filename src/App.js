import Home from './components/Home/Home';
import About from './components/About/About';
import Favourite from './components/Favourite/Favourite';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import List from './components/List/List';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App; 