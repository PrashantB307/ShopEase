import { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

function ProductCard() {
    const context = useContext(myContext)
    const { mode, product ,searchkey,filterType,
        filterPrice} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart);

    const addCart = (product)=> {
        dispatch(addToCart(product));
        toast.success('Added to Cart');

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    
}

export default ProductCard