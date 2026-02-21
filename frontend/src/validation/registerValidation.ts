import Joi from "joi";

export const postSchemas = Joi.object({
  firstName: Joi.string().required().messages({
    "any.required": "First name is required",
    "string.empty": "First name cannot be empty",
  }),
  lastName: Joi.string().required().messages({
    "any.required": "Last name is required",
    "string.empty": "Last name cannot be empty",
  }),
  dateOfBirth: Joi.string().required().messages({
    "any.required": "Date of birth is required",
    "string.empty": "Date of birth cannot be empty",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty",
      "string.email": "Please enter a valid email address",
    }),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .required()
    .messages({
      "any.required": "Password is required",
      "string.empty": "Password cannot be empty",
      "string.min": "Password must be at least 8 characters",
      "string.pattern.base":
        "Password must contain uppercase, lowercase, and a number",
    }),
  phin: Joi.string().length(9).pattern(/^\d+$/).required().messages({
    "any.required": "PHIN is required",
    "string.empty": "PHIN cannot be empty",
    "string.length": "PHIN must be exactly 9 digits",
    "string.pattern.base": "PHIN must contain only numbers",
  }),
});
