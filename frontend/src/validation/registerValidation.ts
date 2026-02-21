import Joi from "joi";


export const postSchemas = 
        Joi.object({ 
            firstName: Joi.string().required().messages({
                "any.required": "Name is required",
                "string.empty": "Name cannot be empty",
            }),
            lastName: Joi.string().required().messages({
                "any.required": "Last name is required",
                "string.empty": "Last name cannot be empty",
            }),
            dateOfBirth: Joi.date().required().messages({
                "any.required": "Date of birth is required",
                "date.empty": "Date of birth cannot be default",
            }),
            password: Joi.string().required().messages({}),
            email: Joi.string().required().messages({}),
            phin: Joi.number().integer().min(9).required().messages({
                "any.required": "PHIN is required",
                "number.empty": "PHIN cannot be empty",
            }),
        })