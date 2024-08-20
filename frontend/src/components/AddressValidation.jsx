import * as Yup from "yup"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const AddressValidation = Yup.object({
    fName: Yup.string().min(3).required("Please Enter Your First Name"),
    lName: Yup.string().min(3).required("Please Enter Your Last Name"),
    email: Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
    mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please Enter Your mobile number"),
    address: Yup.string().min(2).required("Please Enter Your Address")
})