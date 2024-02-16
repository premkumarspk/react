import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
       name:"counter",
       initialState: {counter:0},
       reducers:{
          increment : (state,action)=>{
              state.value = state.value+1
          }
       }
})


export const {increment} = counterSlice.actions

export default counterSlice.reducer;