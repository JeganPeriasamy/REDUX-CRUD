import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    BioData: [],
    selectedData:{}
}


const usersSlice = createSlice({
    name:"bio",
    initialState,
    reducers:{
        add:(state,action)=>{
            const id = Math.random() * 100
            const user = {...action.payload,id}
            state.BioData.push(user)
        },
        remove:(state,action)=>{
           state.BioData = state.BioData.filter((user)=>user.id !== action.payload.id)
        },
        update:(state,action)=>{
            state.BioData = state.BioData.map((user)=>user.id === action.payload.id ? action.payload : user )
        },
        setSelected:(state,action)=>{
                state.selectedData = action.payload
        }

    }
})

 
export const {add,remove,update,setSelected} = usersSlice.actions

export default usersSlice.reducer
// Action has payload, where payload is the data(name,email,id)