"use client";

import type { FC } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useAuth } from "@app/hooks";
import { useRouter } from "next/navigation";

const LoginJWT: FC = (props) => {
  const { login } = useAuth() as any;
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: "nextjs@test.com",
        password: "Password123!",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
      })}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting }
      ): Promise<void> => {
        try {
          await login(values.email, values.password);
          setStatus({ success: true });
          setSubmitting(false);
          router.push("/dashboard/customers");
        } catch (err: any) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }): JSX.Element => (
        <form
          noValidate
          onSubmit={handleSubmit}
          {...props}
          className="w-full max-w-md"
        >
          <div className="mb-4">
            <input
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              type="email"
              name="email"
              placeholder="Email Address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className="mt-1 text-sm text-red-500">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched.password && errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password && (
              <div className="mt-1 text-sm text-red-500">{errors.password}</div>
            )}
          </div>

          {errors.submit && (
            <div className="mb-4 text-sm text-red-500">{errors.submit}</div>
          )}

          <div className="mb-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Log In
            </button>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              Use <span className="font-semibold">nextjs@test.com</span> and
              password <span className="font-semibold">Password123!</span>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginJWT;
