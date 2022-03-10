import React from 'react';

// import global store
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

// This component expects an item object as a prop and then use the object's properties to populate the jsx
const CartItem = ({ item }) => {

    // only destructure dispatch() because CartItem component has no need to read state
    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
    };

    const onChange = (e) => {
        // if user changes quantity to 0 we should delete item from cart... otherwise call UPDATE_CART_QUANTITY
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            })
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            })
        }
    }
    return (
        <div className='flex-row'>
            <div>
                <img    
                    src={`/images/${item.image}`}
                    alt=''
                />
            </div>
            <div>
                <div>
                    <span>QTY:</span>
                    <input 
                        type='number'
                        placeholder='1'
                        value={item.purchaseQuantity}
                        onChange={onChange}
                    />
                    <span   
                        role='img'
                        aria-label='trash'
                        style={{cursor: 'pointer'}}
                        onClick={() => removeFromCart(item)}
                    >
                      🗑️  
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;