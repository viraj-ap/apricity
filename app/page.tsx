import { FAQ } from "@/components/faq";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <FAQ />
      </div>
    </>
  );
}
