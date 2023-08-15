import {configureStore} from '@reduxjs/toolkit';
import PersonalInfoSlice from './redux/Slices/PersonalInfoSlice';
import ContactSlice from './redux/Slices/ContactSlice';
import SkillSlice from './redux/Slices/SkillSlice';
import ExperienceSlice from './redux/Slices/ExperienceSlice';
import EducationSlice from './redux/Slices/EducationSlice';
import StepSlice from './redux/Slices/StepSlice';
import thunk from 'redux-thunk';
export default configureStore({
    reducer:{
        personalInfo:PersonalInfoSlice,
        contactDetails:ContactSlice,
        skills:SkillSlice,
        experiences:ExperienceSlice,
        educations:EducationSlice,
        step:StepSlice
    },
    middleware:[thunk]
})