import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.number().min(10).max(10).required("Please enter your mobile number"),
  dob: Yup.string().required("Please enter your Date of Birth"),
  password: Yup.string()
  .min(8, 'Password must be 8 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
  course: Yup.string().required("Please select your course"),
  batch: Yup.string().required("Please enter your batch"),
  branch: Yup.string().required("Please select your branch"),
  shift: Yup.string().required("Please select your shift"),
});