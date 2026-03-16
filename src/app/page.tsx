import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { AppScreens } from "@/components/AppScreens";
import { Comparison } from "@/components/Comparison";
import { Features } from "@/components/Features";
import { Privacy } from "@/components/Privacy";
import { Languages } from "@/components/Languages";
import { FAQ } from "@/components/FAQ";
import { DownloadCTA } from "@/components/DownloadCTA";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-wave-primary/[0.04] rounded-full blur-[150px]" />
        <div className="absolute top-[30%] -right-32 w-[400px] h-[600px] bg-wave-primary/[0.03] rounded-full blur-[130px]" />
        <div className="absolute top-[55%] -left-48 w-[450px] h-[450px] bg-wave-accent/[0.03] rounded-full blur-[140px]" />
        <div className="absolute top-[80%] -right-40 w-[500px] h-[500px] bg-wave-primary/[0.04] rounded-full blur-[160px]" />
        <div className="absolute -bottom-20 -left-32 w-[350px] h-[350px] bg-wave-match/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <HowItWorks />
        <AppScreens />
        <Comparison />
        <Features />
        <Privacy />
        <Languages />
        <FAQ />
        <DownloadCTA />
      </div>
    </div>
  );
}
