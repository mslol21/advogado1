import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PracticeAreas } from "@/components/sections/PracticeAreas";

export const metadata = {
  title: "Áreas de Atuação | Calixto Advocacia",
  description: "Conheça nossas áreas de especialização jurídica.",
};

export default function Atuacao() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-0">
        <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nossas Especialidades</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Atuação multidisciplinar para oferecer soluções completas e eficientes para você ou sua empresa.
            </p>
          </div>
        </section>
        
        {/* We can reuse the PracticeAreas component from the home page, but without the "View All" link header since we are already on the page */}
        <div className="mt-[-80px]">
          <PracticeAreas />
        </div>
      </main>
      <Footer />
    </>
  );
}
