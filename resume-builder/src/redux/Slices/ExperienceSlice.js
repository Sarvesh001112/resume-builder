import {createSlice} from '@reduxjs/toolkit';
export const ExperienceSlice=createSlice({
    name:"Experience",
    initialState:{
        experience:[]
    },
    reducers:{
        updateExperience:(state,action)=>{
            return{
                experience:action.payload?.data
            }
        }
    }
});
export default ExperienceSlice.reducer;
export const{updateExperience}=ExperienceSlice.actions;