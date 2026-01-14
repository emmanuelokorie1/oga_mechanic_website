"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { images, icons } from "@/constant";
import { routes } from "@/constant/routes";
import { Loader2, ArrowLeft } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import Input from "@/components/forms/Input";
import toast from "react-hot-toast";

// Validation Schema
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone_number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignupPage = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      const payload = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: values.phone_number,
        password: values.password,
        confirm_password: values.password, // Auto-confirm
        role: "primary_user",
      };

      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${baseUrl}/users/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || JSON.stringify(data) || "Registration failed");
      }
      return data;
    },
    onSuccess: (data, variables) => {
      localStorage.setItem("signup_email", variables.email);
      router.push(routes.verifyOtp);
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone_number: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div className="hidden lg:block w-[40%] relative">
        <Image
          src={images.signup}
          alt="Signup Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-[60%] bg-gray-50 flex flex-col justify-center sm:px-8 md:px-16 lg:px-24 py-12 relative">
        
        <div onClick={() => router.back()} className="absolute top-8 cursor-pointer border border-gray-300 rounded-md p-2 left-8 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-6 h-6" />
        </div>

        {/* Logo */}
        <Link
          href={routes.home}
          className="absolute top-30 right-14 hidden lg:flex justify-end items-center gap-2"
        >
          <Image src={icons.logo1} alt="Oga Mechanic" width={170} height={170} />
        </Link>

        <div className="max-w-[80%] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile set up</h1>
            <p className="text-gray-500 mb-8">Set up your profile information</p>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {/* First Name */}
              <Input
                label="First name"
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                {...formik.getFieldProps("firstName")}
                error={formik.errors.firstName}
                touched={formik.touched.firstName}
              />

              {/* Last Name */}
              <Input
                label="Last name"
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                {...formik.getFieldProps("lastName")}
                error={formik.errors.lastName}
                touched={formik.touched.lastName}
              />

              {/* Email */}
              <Input
                label="Email address"
                id="email"
                type="email"
                placeholder="Enter email address"
                {...formik.getFieldProps("email")}
                error={formik.errors.email}
                touched={formik.touched.email}
              />

              {/* Phone Number */}
              <Input
                label="Phone Number"
                id="phone_number"
                type="tel"
                placeholder="Enter phone number"
                {...formik.getFieldProps("phone_number")}
                error={formik.errors.phone_number}
                touched={formik.touched.phone_number}
              />

              {/* Password */}
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Create a password"
                {...formik.getFieldProps("password")}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
       
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-[#D10000] cursor-pointer text-white font-bold py-3.5 rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {mutation.isPending ? (
                  <Loader2 className="animate-spin w-6 h-6 mx-auto" />
                ) : (
                  "Create account"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;