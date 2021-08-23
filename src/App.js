import './App.css';
import { Provider } from 'react-redux';
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Categories from './components/Categories'
import Container from '@material-ui/core/Container';
import store from './store/index.js';
import Cart from './components/Cart'

function App() {
  return (
    <Container>
      <Provider store={store()}>
        <Header></Header>
        <div >
          <Categories></Categories>
          <Cart />
        </div>
        <Products></Products>
        <Footer></Footer>
      </Provider>
    </Container>
  );
}

export default App;
