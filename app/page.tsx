import { AnimationExamples } from "@/components/animations/animation-examples";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <section className="container py-12 space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Guide d&apos;Animations Modernes
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Découvrez comment créer des animations fluides et modernes avec
          Next.js, Tailwind CSS et Framer Motion à travers des exemples
          interactifs.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/tutoriels">
            <Button size="lg">Commencer</Button>
          </Link>
          <Link href="/ressources">
            <Button variant="outline" size="lg">
              Voir les ressources
            </Button>
          </Link>
        </div>
      </section>

      <section className="container py-12 space-y-8">
        <h2 className="text-3xl font-bold text-center">
          Exemples d&apos;Animations
        </h2>
        <AnimationExamples />
      </section>
    </main>
  );
}
