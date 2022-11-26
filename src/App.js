import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {

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
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_04nUEODqJsREJzTPZIVP0xjpr0dshZ2Xw&usqp=CAU'
                },
                {
                    title: 'Laptop',
                    price: 45000,
                    qty: 1,
                    id: 3,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwhD6sYLoaWpUxIPK0Ra631k0pVDwJhC_Pw&usqp=CAU'
                },
                {
                    title: 'Scooty',
                    price: 75000,
                    qty: 1,
                    id: 4,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYTsgJsvLBAE98A5RtHiPM3FEId7b07kQAQ&usqp=CAU'
                },
                {
                    title: 'Motor',
                    price: 25000,
                    qty: 1,
                    id: 5,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRSWfubGMUe9vJc92sqZ7J7Q-8zxwjzl6cA&usqp=CAU'
                },
                {
                    title: 'E-Cycle',
                    price: 45000,
                    qty: 1,
                    id: 6,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoi1P9H8aUX1QG-a5LdCJOYyvQLRE-rXDHO25Zwa2hES2kLbfFfIop1vVYvun5BY7Nq4&usqp=CAU'
                },
                {
                    title: 'Motor Cycle',
                    price: 45000,
                    qty: 1,
                    id: 7,
                    img: 'https://www.gizmochina.com/wp-content/uploads/2022/01/damon-hyperfighter.jpg'
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

    handleDelete = (id)=>{
        const {products} = this.state;

        const items = products.filter((item)=> item.id !== id)

        this.setState({
            products: items
        })
    }

   getCount = ()=>{
    const {products} = this.state;

    let count = 0;

    products.forEach((product)=>{
      count += product.qty; 
    })

    return count;

    }
  
    render(){
      const {products} = this.state;
  return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.increasedQuantity}
          onDecreaseQuantity = {this.decresedQuantity}
          onDeleteQuantity = {this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
