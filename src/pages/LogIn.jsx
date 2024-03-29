import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const LogIn = () => {
  const [visible, setVisibile] = useState(false);

  const handleVisibility = () => {
    setVisibile(!visible);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      PhoneNumber: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required*"),
      PhoneNumber: Yup.string().required("Phone number is required*"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required*"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required*"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required*"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          throw new Error("Failed to submit form");
        }

        resetForm();
        console.log("Form submitted successfully");
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className="w-full flex h-svh items-center justify-center p-2 bg-gradient-to-br from-accentPink-dark via-accentPink-medium to-accentPink-light">
      <div className="flex-grow max-w-[30em] border border-accentPink-light bg-white rounded-md shadow-lg">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-2xl text-accentPink-dark font-lobsterTwo font-bold ">
            LOG IN
          </h1>
          <hr className="border border-black/30" />
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 text-black"
          >
            <div className="w-full">
              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm caret-accentPink-medium outline-accentPink-medium"
                id="email"
                placeholder="Email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="relative w-full">
              {/* <label htmlFor="password">Password:</label> */}

              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm caret-accentPink-medium outline-accentPink-medium"
                id="password"
                placeholder="Password"
                type={visible ? "text" : "password"}
                {...formik.getFieldProps("password")}
              />
              {visible ? (
                <VisibilityIcon
                  onClick={handleVisibility}
                  className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-500"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={handleVisibility}
                  className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-500"
                />
              )}

              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <button
              className="w-full rounded-sm bg-accentPink-dark hover:bg-accentPink-medium text-white p-2  hover:bg-primary-light"
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
            <div className="flex gap-2">
              <p className="">Don't have an account?</p>
              <a href="/signup" className="text-blue-700">
                Sign up
              </a>
            </div>
            <a href="/forgot-password" className="text-gray-500">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
