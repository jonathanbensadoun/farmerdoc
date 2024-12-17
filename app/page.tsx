import { AnimationExamples } from "@/components/animations/animation-examples";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center ">
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
          {/* <Link href="/tutoriels">
            <Button size="lg">Commencer</Button>
          </Link> */}
          <Link href="/ressources">
            <Button size="lg">Voir les ressources</Button>
          </Link>
        </div>
      </section>
      <section className=" py-12 space-y-8">
        <h2 className="text-3xl font-bold text-center">installation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">1. Créer un projet Next.js</h3>
            <p>Créez un nouveau projet Next.js en utilisant .</p>
            <code className="p-1 bg-primary text-primary-foreground  rounded text-center">
              npx create-next-app@latest
            </code>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">2. Installer Tailwind CSS</h3>
            <p>Installez Tailwind CSS en utilisant .</p>
            <code className="p-1  bg-primary text-primary-foreground  rounded text-center">
              npm install tailwindcss
            </code>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">3. Installer Framer Motion</h3>
            <p>Installez Framer Motion en utilisant .</p>
            <code className="p-1  bg-primary text-primary-foreground  rounded text-center">
              npm install motion
            </code>
          </div>
        </div>
      </section>
      <section className="py-12 space-y-8 ">
        <h2 className="text-3xl font-bold text-center">
          Exemples d&apos;Animations
        </h2>
        <AnimationExamples />
      </section>
    </main>
  );
}
