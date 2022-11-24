import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [
        {   
            id: 1,
            product: "apple",
            price: 10
        },
        {
            id: 2,
            product: "tomato",
            price: 5
        }
    ],
    idCounter: 2,
    totalItems: 2
}

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,

    reducers: {
        incrementPrice: (state, id)=> {
            const index = state.items.findIndex(item=> {
                return item.id === id.payload
            })

            if(index !== -1){
                state.items[index].price ++
            }      
        },

        decrementPrice: (state, id)=> {
            const index = state.items.findIndex(item=> {
                return item.id === id.payload
            })

            if(index !== -1){
                state.items[index].price --
            }      
        },

        removeItem: (state, id)=> {
            state.items = state.items.filter(item=> item.id !== id.payload)
        }
    }
})

export const { incrementPrice, decrementPrice, removeItem } = inventorySlice.actions

export const selectInventoryItems = (state) => state.inventory.items

export default inventorySlice.reducer