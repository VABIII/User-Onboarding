import * as yup from "yup";


const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("First Name is required.")
        .min(3, "First name should be at least 3 characters long."),
    last_name: yup
        .string()
        .trim()
        .required("Last Name is required.")
        .min(3, "Last Name should be at least 3 characters long."),
    email: yup
        .string()
        .trim()
        .required("Email address is required"),
    password: yup
        .string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters long."),
    termsOfService: yup
        .boolean()
        .required("TOS is required.")
})

export default formSchema;














































