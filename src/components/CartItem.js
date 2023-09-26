import './CartItem.css'

function CartItem(props){

    return <>
        <div className="CartItem">
            <p id = 'cart_item_details'>{props.item.title}</p>
            <p id = 'cart_item_details'>quantity</p>
            <p id = 'cart_item_details'>{props.item.count}</p>
        </div>
    </>

}

export default CartItem;