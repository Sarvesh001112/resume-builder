import {createSlice} from '@reduxjs/toolkit';
export const StepSlice=createSlice({
    name:"Step",
    initialState:{
        current:0,
        theme:""
    },
    reducers:{
        previousStep:(state)=>{
            return{
                ...state,
                current:state.current-1
            }
        },
        nextStep:(state)=>{
            return{
                ...state,
                current:state.current+1
            }
        },
        updateTheme:(state,action)=>{
            return{
                ...state,
                theme:action.payload.data
            }
        }
    }
});
export default StepSlice.reducer;
export const{previousStep,nextStep,updateTheme}=StepSlice.actions;