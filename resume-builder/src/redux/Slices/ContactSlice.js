import {createSlice} from '@reduxjs/toolkit';
export const ContactSlice=createSlice({
    name:"ContactDetails",
    initialState:{
        phoneNumber:"",
        city:"",
        email:"",
        linkedIn:"",
        personalWebsite:""
    },
    reducers:{
        updatePhoneNumber:(state,action)=>{
            return{
                ...state,
                phoneNumber:action.payload.data
            }
        },
        updateCity:(state,action)=>{
            return{
                ...state,
                 city:action.payload.data
            }
        },
        updateEmail:(state,action)=>{
            return{
                ...state,
                email:action.payload.data
            }
        },
        updateLinkedIn:(state,action)=>{
            return{
                ...state,
                linkedIn:action.payload.data
            }
        },
        updatePersonalWebsite:(state,action)=>{
            return{
                ...state,
                personalWebsite:action.payload.data
            }
        },
    }
});
export default ContactSlice.reducer;
export const{updatePhoneNumber,updateCity,updateEmail,updateLinkedIn,updatePersonalWebsite}=ContactSlice.actions;