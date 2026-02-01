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
    .matches(/^\+?[0-9]+$/, "Invalid phone number format")
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

      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
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
      {/* Left Side - Image & overlay (Hidden on Mobile) */}
      <div className="hidden lg:block w-[45%] relative overflow-hidden">
        <Image
          src={images.signup}
          alt="Signup Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        
        <div className="absolute bottom-0 left-0 p-12 text-white z-10">
             <div className="mb-6">
                <Image src={icons.logo} alt="Oga Mechanic" width={180} height={180} className="" />
             </div>
             <h2 className="text-4xl font-bold mb-4 leading-tight">Join the community of <br/> smart vehicle owners.</h2>
             <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Connect with verified mechanics, track your vehicle history, and manage your repairs seamlessly.
             </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center items-center px-6 py-12 pb-32 lg:p-12 relative bg-white">
        
        <div onClick={() => router.back()} className="absolute top-8 left-8 cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
        </div>

        <div className="w-full max-w-lg space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center lg:text-left mb-10">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Create your account</h1>
                <p className="text-gray-500 text-lg">
                    Join Oga Mechanic today. It takes less than a minute.
                </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label="First name"
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    {...formik.getFieldProps("firstName")}
                    error={formik.errors.firstName}
                    touched={formik.touched.firstName}
                    // className="bg-gray-50 border-gray-100 h-12"
                />

                <Input
                    label="Last name"
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    {...formik.getFieldProps("lastName")}
                    error={formik.errors.lastName}
                    touched={formik.touched.lastName}
                    // className="bg-gray-50 border-gray-100 h-12"
                />
              </div>

              <Input
                label="Email address"
                id="email"
                type="email"
                placeholder="name@example.com"
                {...formik.getFieldProps("email")}
                error={formik.errors.email}
                touched={formik.touched.email}
                // className="bg-gray-50 border-gray-100 h-12"
              />

              <Input
                label="Phone Number"
                id="phone_number"
                type="tel"
                placeholder="+234..."
                {...formik.getFieldProps("phone_number")}
                error={formik.errors.phone_number}
                touched={formik.touched.phone_number}
                // className="bg-gray-50 border-gray-100 h-12"
              />

              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Create a password"
                {...formik.getFieldProps("password")}
                error={formik.errors.password}
                touched={formik.touched.password}
                // className="bg-gray-50 border-gray-100 h-12"
              />
       
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-[#D10000] cursor-pointer text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-red-100 mt-6 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {mutation.isPending ? (
                  <Loader2 className="animate-spin w-6 h-6 mx-auto" />
                ) : (
                  "Create Account"
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