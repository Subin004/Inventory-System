import { checkSchema } from "express-validator"

// User Registeration Valitading Schema
export const userRegisterValidationSchema = {
    user_name:{
        notEmpty: {
            errorMessage:"Username should not be empty"
        }
    },
    company:{
        notEmpty: {
            errorMessage:"company name should not be empty"
        }
    },
    email:{
        notEmpty: {
            errorMessage:"email should not be empty"
        },
        isEmail: {
            errorMessage: "Email should be a valid one"
        }
    },
    password:{
        notEmpty: {
            errorMessage:"password should not be empty"
        },
        isLength: {
            options: {min:5 , max: 12},
            errorMessage: "Password should be between 5 to 12 characters"
        }
    }
}

// Password Reset Validation Schema
export const passwordReserValidationSchema = {
    new_password: {
        notEmpty: {
            errorMessage: "Password cannot not be empty"
        },
        isLength: {
            options: {min: 5, max: 12},
            errorMessage: "Password should be between 5 to 12 characters"
        }
    },
    re_enter_password: {
        notEmpty: {
            errorMessage: "Password cannot not be empty"
        },
        isLength: {
            options: {min: 5, max: 12},
            errorMessage: "Password should be between 5 to 12 characters"
        }
    }
}