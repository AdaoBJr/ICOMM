import { Switch, Route } from 'react-router-dom';
import Home from './common/pages/Home';
// import Favorited from './common/pages/Favorited';
import Cart from './common/pages/Cart';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/favoritos" component={Favorited} /> */}
      <Route exact path="/carrinho" component={Cart} />
    </Switch>
  );
}

export default App;
