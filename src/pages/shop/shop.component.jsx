import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
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
        const { collections } = this.state

        return (
            <section className="shop-page">
                <h1>Shop page</h1>
                {
                    collections.map(({id, ...collectionProps}) => <CollectionPreview key={id} {...collectionProps} />)
                }
                
            </section>
        )
    }
}