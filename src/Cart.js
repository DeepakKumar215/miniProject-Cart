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

    increasedQuantity(){
        // form 1
        // this.setState({
        //     qty: this.state.qty +1
        // })

        //form 2nd
        this.setState((prevState)=>{
            return {
                qty: prevState.qty+1
            }
        })
    }

    decresedQuantity = ()=>{
        if(this.state.qty ===0){
            return;
        }

        this.setState({
            qty: this.state.qty -1
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
                     />
                })}
            </div>
        );
    }    
}



export default Cart;