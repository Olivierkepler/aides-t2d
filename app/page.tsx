import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
   <div>
    <Navbar />
     <div >
      <Hero studyId="AIDES-T2D-001" />
      
    </div>
    <Footer />
   </div>

  );
}
