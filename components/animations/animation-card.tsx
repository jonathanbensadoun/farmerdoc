"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { motion } from "framer-motion";

interface AnimationCardProps {
  title: string;
  description: string;
  code: string;
  component: React.ReactNode;
}

export function AnimationCard({
  title,
  description,
  code,
  component,
}: AnimationCardProps) {
  return (
    <Card className="w-screen md:w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="min-h-[200px] flex items-center justify-center bg-secondary/50 rounded-lg p-6">
          {component}
        </div>
        <CodeBlock code={code} />
      </CardContent>
    </Card>
  );
}
