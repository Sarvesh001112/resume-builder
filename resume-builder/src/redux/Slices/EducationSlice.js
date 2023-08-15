import {createSlice} from '@reduxjs/toolkit';
export const EducationSlice=createSlice({
    name:"Education",
    initialState:{
        education:[]
    },
    reducers:{
        updateEducation:(state,action)=>{
            return{
                education:action.payload.data
            }
        }
    }
});
export default EducationSlice.reducer;
export const{updateEducation}=EducationSlice.actions;