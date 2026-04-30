import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { CardSection } from "./components/CardSection";
import FeatureSection from "./components/FeatureSection";
import { ArrowRight, CheckCircle, StarIcon } from "lucide-react";
import { PricingSection } from "./components/PricingSection";
import { Button } from "@/components/ui/button";
import { Footer } from "./components/Footer";

// const imageLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

const testimonial = [
  {
    rating: 3,
    description: '"FinTrack helped me understand my spending patterns. I have saved over $200 per month just by tracking where my money goes!"',
    name: "Sarah Chen",
    position: "Marketing Manager"
  },
  {
    rating: 5,
    description: '"As a freelancer with irregular income, this app is a lifesaver. Budget tracking has never been this easy and intuitive."',
    name: "Marcus Johnson",
    position: "Freelance Designer"
  },
  {
    rating: 4,
    description: '"The visualizations make it so clear where my money goes. I have hit my savings goals for three months straight now."',
    name: "Emily Rodriguez",
    position: "Software Engineer"
  },
  {
    rating: 5,
    description: '"I use this for both personal and business tracking. The reports help me make better financial decisions. Highly recommended!"',
    name: "James Mitchell",
    position: "Small Business Owner"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <main className="flex flex-1 w-full flex-col">
        <FeatureSection />
        <div className="flex flex-col items-center bg-[#c8f9fd]/20 px-32 py-16 gap-4">
          <h1 className="text-5xl flex flex-col gap-2 font-bold">
            See It In Action
          </h1>
          <p className="text-lg max-w-2xl text-center text-gray-600">
            Intuitive interface that makes managing your finances simple and enjoyable.
          </p>

          <div className="flex items-center w-full mt-12 gap-2">
            <Image
              src="/dashboard.png"
              alt="Picture of the author"
              className="w-full h-auto rounded-lg shadow-lg"
              width={1200}
              height={800}
            />
          </div>
          <div className="grid w-full grid-cols-3 justify-between mt-12">
            <div className="flex items-center flex-col">
              <div className="font-bold text-2xl text-[#4970cc]">100%</div>
              <p>Real Time Sync</p>
            </div>
            <div className="flex items-center flex-col">
              <div className="font-bold text-2xl text-[#4970cc]">256-bit</div>
              <p>Bank-level Security
              </p>
            </div>
            <div className="flex items-center flex-col">
              <div className="font-bold text-2xl text-[#4970cc]">0%</div>
              <p>Transaction Fees</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-32 py-16 gap-4">
          <h1 className="text-5xl flex flex-col gap-2 font-bold">
            Loved by Thousands of Users
          </h1>
          <p className="text-lg max-w-2xl text-center text-gray-600">
            See what our users are saying about their financial transformation.
          </p>

          <div className="grid grid-cols-2 w-full gap-8">
            {testimonial.map((testi, index) => (
              <CardSection key={index} {...testi} />
            ))}
          </div>
        </div>
        <PricingSection />

        <div className="flex flex-col items-center bg-linear-to-r from-[#f5f7fa] to-[#fdf6ec] px-32 py-16">
          <div className="w-5xl flex flex-col items-center gap-6 rounded-md bg-white py-16">
            <h1 className="text-5xl flex flex-col gap-2 font-bold">
              Ready to Take Control?
            </h1>
            <p className="text-lg max-w-2xl text-center text-gray-600">
              Join thousands of users who are already saving more and understanding their finances better. Start your free account today.
            </p>

            <div className="flex items-center gap-2">
              <Button>
                Create Free Account <ArrowRight className="text-white" />
              </Button>
              <Button variant="outline">Schedule Demo</Button>
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex gap-1">
                <CheckCircle className="text-yellow-700" />
                No Credit Card Required
              </div>
              <div className="flex gap-1">
                <CheckCircle className="text-yellow-700" />
                Free Forever Plan
              </div>
              <div className="flex gap-1">
                <CheckCircle className="text-yellow-700" />
                Takes 2 minutes to Set Up
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
