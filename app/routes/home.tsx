import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Meu Bilhete" },
    { name: "description", content: "Crie sua cartinha de amor para alguém especial" },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-olive-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-zinc-900 p-8 md:p-10 shadow-sm">
        {/* Greeting */}
        <div className="flex items-baseline">
          <span className="text-lg shrink-0 font-semibold text-foreground">
            Meu amor,
          </span>

          <input
            autoFocus
            type="text"
            placeholder="Destinatário"
            className="w-full bg-transparent border-none outline-none text-lg text-muted-foreground ml-1 placeholder:text-muted-foreground/60"
          />
        </div>

        {/* Message Body */}
        <textarea
          className="w-full h-40 mt-6 bg-transparent border-none outline-none resize-none leading-relaxed text-muted-foreground placeholder:text-muted-foreground/50 text-base"
          placeholder="Escreva sua mensagem aqui... Seja sincero(a) e deixe seu coração falar!"
        />

        {/* Signature Area */}
        <div className="mt-8 text-right">
          <p className="text-base font-semibold text-foreground mb-1">
            Com amor,
          </p>

          <input
            type="text"
            className="bg-transparent border-none outline-none text-base text-muted-foreground text-right w-full placeholder:text-muted-foreground/60"
            placeholder="Seu nome"
          />
        </div>
      </div>

      {/* Navigation Button */}
      <Button size="lg" className="mt-10">
        Continuar
      </Button>

      {/* Letters Counter */}
      <p className="mt-8 text-muted-foreground/60 text-xs tracking-wide">
        12.847 cartas de amor já foram criadas
      </p>
    </main>
  )
}
