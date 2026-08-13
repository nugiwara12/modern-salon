import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Styles from "@/components/Styles";
import Team from "@/components/Team";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import BackTop from "@/components/BackTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 font-sans text-stone-100">
      <Navbar />
      <Hero />
      <Services />
      <Styles />
      <Team />
      <Reservation />
      <Location />
      <Footer />
      <BackTop />
    </main>
  );
}
