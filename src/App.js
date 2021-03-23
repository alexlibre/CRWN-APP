import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import AuthPage from './pages/authpage/authpage.component'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/auth" component={AuthPage}/>
            </Switch>
        </>
    );
}

export default App;
