import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RessourcesPage() {
  return (
    <main className="flex justify-center items-center flex-col py-12 space-y-8">
      <h1 className="text-4xl font-bold">Ressources</h1>
      <p className="text-lg text-muted-foreground">
        Une collection de ressources utiles pour approfondir vos connaissances
        en animation.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Documentation Framer Motion</CardTitle>
            <CardDescription>
              La documentation officielle de Framer Motion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Accéder à la documentation
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Documentation Tailwind CSS</CardTitle>
            <CardDescription>
              La documentation officielle de Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Accéder à la documentation
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Documentation Next.js</CardTitle>
            <CardDescription>
              La documentation officielle de Next.js
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Accéder à la documentation
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
