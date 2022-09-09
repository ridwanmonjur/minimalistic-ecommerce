import { Component } from 'react';
import CardComponent from '../../components/product/CardComponent';
import { GridCart } from '../../components/product/styles';
import { withRouterHOC } from '../../utils/withRouterHOC';

class ListingPage extends Component {
    constructor() {
        super()

        this.counter = 0

        this.cardArray = Array(20).fill({
            id: this.counter++,
            src: "https://cdn.shopify.com/s/files/1/0071/6665/6579/products/RunningT-shirtIMG_0762_720x.png?v=1600684690",
            title: "Apollo Running Shirt",
            price: 45
        })
        // props undefined in constructor: console.log({props: this.props})

    }
    render() {
        // props defined here: console.log({props: this.props})
        let {category} = this.props.router.params
        
        category = category.charAt(0).toUpperCase() + category.slice(1)

        return (
            <main>
                <h3> {category} </h3>
                <GridCart>
                    {
                        this.cardArray && this.cardArray.map((value) =>
                            <CardComponent cardValue={value} key={value.id} />
                        )
                    }
                </GridCart>

                ProductListing 

            </main>
        );
    }
}

export default withRouterHOC(ListingPage);