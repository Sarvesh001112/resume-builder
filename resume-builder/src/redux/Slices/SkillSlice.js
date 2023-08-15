import {createSlice} from '@reduxjs/toolkit';
export const SkillSlice=createSlice({
    name:"Skills",
    initialState:{
        hardSkills:[],
        softSkills:[],
        languageSkills:[]
    },
    reducers:{
        updateHardSkill:(state,action)=>{
            return{
                ...state,
                hardSkills:action.payload.data
            }
        },
        updateSoftSkill:(state,action)=>{
            return{
                ...state,
                softSkills:action.payload.data
            }
        },
        updateLanguageSkill:(state,action)=>{
            return{
                ...state,
                languageSkills:action.payload.data
            }
        }
    }
});
export default SkillSlice.reducer;
export const {updateHardSkill,updateSoftSkill,updateLanguageSkill}=SkillSlice.actions;