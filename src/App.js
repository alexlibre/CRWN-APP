import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import AuthPage from './pages/authpage/authpage.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
            
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            }

            this.setState({
                currentUser: userAuth
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        const { currentUser } = this.state

        return (
            <>
                <Header currentUser={currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/auth" component={AuthPage} />
                </Switch>
            </>
        )
    }
}

export default App;
