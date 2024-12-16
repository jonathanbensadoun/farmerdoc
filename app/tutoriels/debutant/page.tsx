import { BasicAnimations } from "@/components/animations/tutorials/basic-animations";

export default function DebutantPage() {
  return (
    <main className="container py-12 space-y-8">
      <h1 className="text-4xl font-bold">Animations pour Débutants</h1>
      <p className="text-lg text-muted-foreground">
        Découvrez les bases des animations avec Framer Motion à travers des exemples simples et pratiques.
      </p>
      <BasicAnimations />
    </main>
  );
}