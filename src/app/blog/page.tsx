import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Blog Jurídico | Calixto Advocacia",
  description: "Artigos, notícias e novidades sobre o mundo do direito.",
};

const posts = [
  {
    slug: "reforma-trabalhista-2026",
    title: "O que muda com a nova proposta de reforma trabalhista?",
    excerpt: "Análise completa dos principais pontos em discussão no congresso e como eles podem afetar sua empresa.",
    date: "15 Jun 2026",
    author: "Dr. João Calixto",
    category: "Direito Trabalhista",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "planejamento-sucessorio",
    title: "A importância do planejamento sucessório para empresas familiares",
    excerpt: "Como garantir a continuidade do negócio e evitar litígios familiares através de um bom planejamento.",
    date: "10 Jun 2026",
    author: "Dra. Maria Santos",
    category: "Direito de Família",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "revisao-aposentadoria",
    title: "Revisão da Vida Toda: Quem tem direito e como solicitar",
    excerpt: "Entenda o impacto da decisão do STF sobre os benefícios previdenciários e descubra se você pode ser beneficiado.",
    date: "05 Jun 2026",
    author: "Dr. Carlos Silva",
    category: "Direito Previdenciário",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Blog Jurídico</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Artigos, análises e as principais novidades do mundo jurídico explicadas por nossos especialistas.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="h-full overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {post.author}
                      </div>
                    </div>
                    <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-accent hover:text-primary flex items-center gap-2 transition-colors mt-auto">
                      Ler Artigo Completo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
