import { Button } from "~/components/ui/button";

export function LetterCardEditor() {
  return (
    <>
      <div className="w-full max-w-md bg-white border border-zinc-900 p-8 md:p-10 shadow-sm">
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

        <textarea
          className="w-full h-40 mt-6 bg-transparent border-none outline-none resize-none leading-relaxed text-muted-foreground placeholder:text-muted-foreground/50 text-base"
          placeholder="Escreva sua mensagem aqui... Seja sincero(a) e deixe seu coração falar!"
        />

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

      <Button size="lg" className="mt-10">
        Continuar
      </Button>
    </>
  );
}
