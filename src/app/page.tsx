import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSeaction from "@/components/HeroSeaction";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSeaction />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialCards />
      </main>
    </>
  );
}
