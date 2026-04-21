import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Meu Bilhete" },
    { name: "description", content: "Crie sua cartinha de amor para alguém especial" },
  ];
}

export default function Home() {
  return <h1>Hello World</h1>
}
