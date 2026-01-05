import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
   <div>
    <Navbar />
     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <h1>Aides T2D</h1>
      </main>
    </div>
    <Footer />
   </div>

  );
}
