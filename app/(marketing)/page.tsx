import localFont from "next/font/local";
import { Medal, Weight } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";



import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";



const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
});


const textFont = Poppins ({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"

    ]
});







const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
           <div className={cn(
            "flex items-center justify-center flex-col",
            headingFont.className,
            )}>
<h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
MARITIME E-TRAINING, INC.
</h1>
<div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-600 to-red-600
text-white px-4 p-2 rounded-md pb-4 w-fit">
    Work Forward. 
</div>
           </div>
           <div className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-wsmd:max-w-2xl text-center mx-auto",
            textFont.className,
           )}>
          Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done.
           </div>
        </div>
    );
};

export default MarketingPage;