import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TutorielsPage() {
  return (
    <main className="container py-12 space-y-8">
      <h1 className="text-4xl font-bold">Tutoriels d'Animation</h1>
      <p className="text-lg text-muted-foreground">
        Découvrez nos tutoriels détaillés pour maîtriser les animations avec Framer Motion.
      </p>
      <div className="grid gap-6">
        <Link href="/tutoriels/debutant" className="block">
          <Button variant="outline" className="w-full justify-start">
            Animations pour débutants
          </Button>
        </Link>
        <Link href="/tutoriels/intermediaire" className="block">
          <Button variant="outline" className="w-full justify-start">
            Animations intermédiaires
          </Button>
        </Link>
        <Link href="/tutoriels/avance" className="block">
          <Button variant="outline" className="w-full justify-start">
            Animations avancées
          </Button>
        </Link>
      </div>
    </main>
  );
}