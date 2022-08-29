import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  name: yup.string("Enter your name").required("Name is required"),
  photo: yup.string("Upload a photo"),
  schoolname: yup
    .string("Enter School name")
    .required("School name is required"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      photo: "",
      schoolname: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      fetch("https://itor-simple-node-api.herokuapp.com/api/v1/signup", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "multipart/form-data",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(values),
      })
        .then((response) => console.log(response.json))
        .catch((err) => console.log(err));
    },
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#blah").attr("src", e.target.result).width(150).height(200);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  return (
    <div>
      <form className="form_wrapper" onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="standard"
          sx={{ width: "40ch" }}
          value={formik.values.name}
          margin="normal"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />{" "}
        <br />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="standard"
          value={formik.values.email}
          margin="normal"
          sx={{ width: "40ch" }}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />{" "}
        <br />
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="standard"
          type="password"
          margin="normal"
          sx={{ width: "40ch" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />{" "}
        <br />
        <TextField
          id="schoolname"
          name="schoolname"
          label="School Name"
          sx={{ width: "40ch" }}
          margin="normal"
          variant="standard"
          value={formik.values.schoolname}
          onChange={formik.handleChange}
          error={formik.touched.schoolname && Boolean(formik.errors.schoolname)}
          helperText={formik.touched.schoolname && formik.errors.schoolname}
        />{" "}
        <br />
        {/* <Button variant="contained" component="label" sx={{}}>
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button> */}
        <input type="file" onchange="readURL(this);" />
        <img id="blah" src="#" alt="your image" />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ margin: "10px 0", width: "100%" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
