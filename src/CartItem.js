import React from 'react';

const CartItem = (props)=> {
      
        const {title,  qty, price, img} = props.product;
        const {onIncreaseQuantity, onDecreaseQuantity, product, onDeleteQuantity} = props;

        return(
            <div className='cart-item'>
            <div className='left-block'>
                <img  style={styles.images } alt="" src= {img} />
            </div>

            <div className='right-block'>
                <div style={{fontSize: 25, fontWeight: 'bold'}} > {title} </div>
                <div style={{color: '#777'}} >Rs: {price} </div>
                <div style={{color: '#777'}} >Qty: {qty} </div>

                <div className='cart-item-actions'>
                    <img 
                     src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                     alt="increase"
                     className='action-icons'
                     onClick={ ()=> onIncreaseQuantity(product) }
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                      alt="decrese" 
                      className='action-icons'
                      onClick={ ()=> onDecreaseQuantity(product) }
                    />
                    <img
                      src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                      alt="delete"
                      className='action-icons'
                      onClick={ ()=> onDeleteQuantity(product.id) }
                    />
                </div>
            </div>

            </div>
        )
}

const styles = {
    images:{
        height : 230,
        width : 250,
        borderRadius: 5,
        backgroundColor: '#ccc'
    }
}

export default CartItem;