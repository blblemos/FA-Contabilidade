import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().min(14).required(),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
})