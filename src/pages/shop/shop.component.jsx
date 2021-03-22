import React from 'react'
import SHOP_DATA from './shop.data'
import './shop.styles.scss'

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <>
                <h1>Shop page</h1>
            </>
        )
    }
}