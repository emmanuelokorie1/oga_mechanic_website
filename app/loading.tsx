import Image from "next/image";
import { icons } from "@/constant";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="relative flex flex-col items-center gap-4">
        {/* Animated Logo */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 animate-pulse">
          <Image
            src={icons.logo2}
            alt="Loading..."
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Loading Indicator */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-[bounce_1s_infinite_0ms]"></div>
          <div className="w-2 h-2 rounded-full bg-red-600 animate-[bounce_1s_infinite_200ms]"></div>
          <div className="w-2 h-2 rounded-full bg-red-600 animate-[bounce_1s_infinite_400ms]"></div>
        </div>
      </div>
    </div>
  );
}
