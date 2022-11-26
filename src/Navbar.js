import React from 'react';

const Navbar = (props)=> {

        return(
            <div style={styles.nav}>
            <div style={styles.cartItemContainer}>
                <img src="https://t3.ftcdn.net/jpg/01/13/95/02/240_F_113950213_2znQQrapC21FcNXfvqwjnXm5gs6jDi06.jpg"
                style={styles.cartIcon}
                alt="navbar"
                />
                <span style={styles.cartCount} > {props.count} </span>
            </div>

            </div>
        )
    }

const styles = {
    cartIcon:{
        height : 40,
        marginTop: 15,
        marginRight: 20,
        borderRadius: 5
    },
    nav:{
        backgroundColor: 'blue',
        height: 70,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItem: 'center'
    },
    cartItemContainer:{
        position: 'relative'
    },
    cartCount: {
        position: 'absolute',
        padding: '6px 8px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        top: 8,
        right: 8
    }
}

export default Navbar;