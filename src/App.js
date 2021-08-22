import './App.css';
import { Provider } from 'react-redux';
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Categories from './components/Categories'
import Container from '@material-ui/core/Container';
import store from './store/index.js';

function App() {
  return (
    <Container>
      <Provider store={store()}>
        <Header></Header>
        <Categories></Categories>
        <Products></Products>
        <Footer></Footer>
      </Provider>
    </Container>
  );
}

export default App;
