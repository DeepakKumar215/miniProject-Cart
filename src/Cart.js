import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor(){
        super();

        this.state = {
            products: [
                {
                    title: 'Mobile',
                    price: 9999,
                    qty: 1,
                    id: 1,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwhD6sYLoaWpUxIPK0Ra631k0pVDwJhC_Pw&usqp=CAU'
                },
                {
                    title: 'Watch',
                    price: 999,
                    qty: 1,
                    id: 2,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwhD6sYLoaWpUxIPK0Ra631k0pVDwJhC_Pw&usqp=CAU'
                },
                {
                    title: 'Laptop',
                    price: 45000,
                    qty: 1,
                    id: 3,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwhD6sYLoaWpUxIPK0Ra631k0pVDwJhC_Pw&usqp=CAU'
                }
            ]
        }
    }

    increasedQuantity = (product)=>{

        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;
        this.setState({
            // products:products used short hand products
            products
        })
    }

    decresedQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty ===0){
            return;
        }
        products[index].qty -=1;
        this.setState({
            products
        })

    }

    render(){
        const {products} = this.state;
        return(
            <div>
                {products.map((product)=>{
                    return <CartItem 
                    product= {product}
                    key ={product.id}
                    onIncreaseQuantity = {this.increasedQuantity}
                    onDecreaseQuantity = {this.decresedQuantity}
                     />
                })}
            </div>
        );
    }    
}



export default Cart;