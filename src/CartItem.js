import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
            <div className='left-block'>
                <img  style={styles.images } alt="" />
            </div>

            <div className='right-block'>
                <div style={{fontSize: 25, fontWeight: 'bold'}} >Phone</div>
                <div style={{color: '#777'}} >Price</div>
                <div style={{color: '#777'}} >Qty: 1</div>

                <div className='cart-item-actions'>

                </div>
            </div>

            </div>
        )
    }
}

const styles = {
    images:{
        height : 110,
        width : 110,
        borderRadius: 5,
        backgroundColor: '#ccc'
    }
}

export default CartItem;