import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
// import Hero from "@/components/ui/Hero";
import FourWays from "@/components/ui/FourWays";
import FAQ from "@/components/ui/FAQ";
// import MacButtonBlack from "@/components/utilities/button";
import Head from "@/components/ui/Head";

export default function Home() {
  return (
   <div>
    <Navbar />
     <div >
      {/* <Hero studyId="AIDES-T2D-001" /> */}
      <Head/>
      <FourWays />
      <FAQ />
      
    </div>
    <Footer />
   </div>

  );
}
