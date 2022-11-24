import { useSelector } from 'react-redux'
import { inventorySlice, selectInventoryItems } from './inventorySlice'
import { Item } from './Item'

export function Inventory() {
    
    const inventoryItems = useSelector(selectInventoryItems)


    return (
        <div>
            {inventoryItems.map(item=> {
                return(
                    <Item key={item.id} item={item} />
                )
            })}
        </div>
    )
}