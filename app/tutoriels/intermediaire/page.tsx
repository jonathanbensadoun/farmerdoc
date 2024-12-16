import { IntermediateAnimations } from "@/components/animations/tutorials/intermediate-animations";

export default function IntermediairePage() {
  return (
    <main className="container py-12 space-y-8">
      <h1 className="text-4xl font-bold">Animations Intermédiaires</h1>
      <p className="text-lg text-muted-foreground">
        Explorez des animations plus complexes et apprenez à les combiner efficacement.
      </p>
      <IntermediateAnimations />
    </main>
  );
}