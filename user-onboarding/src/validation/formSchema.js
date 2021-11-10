import * as yup from "yup";


export const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("First Name is required.")
        .min(3, "First name should be at least 3 characters long."),
    last_name: yup
        .string()
        .trim()
        .required("Last name is required")
        .min(3, "Last name should be at least 3 characters long."),
    password: yup
        .string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters long."),
    termsOfService: yup
        .boolean()
})
















































