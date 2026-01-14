import Link from "next/link";
import { CTAButton } from "@/components/ui/CTAButton";
import { routes } from "@/constant/routes";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-9xl font-black text-red-500 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 text-lg max-w-md mb-10">
        Oops! The page you are looking for keeps showing up as "missing". It might have been moved or doesn't exist.
      </p>
      
      <CTAButton
        text="Back to Home"
        className="bg-red-600 text-white border border-red-600 hover:bg-red-700"
        classNameIcon="bg-white text-red-600"
        href={routes.home}
      />
    </div>
  );
}
