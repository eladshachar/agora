import { incrementPrice, decrementPrice, removeItem } from "./inventorySlice"
import { useDispatch } from "react-redux"

export function Item(props) {

    const dispatch = useDispatch()
    const id = props.item.id


    return(
        <div>
            <span>{props.item.product} ${props.item.price}</span> 
            <span className="arrow" onClick={()=> dispatch(incrementPrice(id))}>{String.fromCharCode(8593)}</span>
            <span className="arrow" onClick={()=> dispatch(decrementPrice(id))}>{String.fromCharCode(8595)}</span>
            <button onClick={()=> dispatch(removeItem(id))}>Purchased</button>
        </div>
    )
}