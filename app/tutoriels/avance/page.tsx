import { AdvancedAnimations } from "@/components/animations/tutorials/advanced-animations";

export default function AvancePage() {
  return (
    <main className="container py-12 space-y-8">
      <h1 className="text-4xl font-bold">Animations Avancées</h1>
      <p className="text-lg text-muted-foreground">
        Maîtrisez les techniques avancées d'animation pour créer des expériences utilisateur exceptionnelles.
      </p>
      <AdvancedAnimations />
    </main>
  );
}