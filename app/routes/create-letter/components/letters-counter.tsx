type LettersCounterProps = {
	count: number
}

export function LettersCounter({ count }: LettersCounterProps) {
	const formattedCount = new Intl.NumberFormat('pt-BR').format(count)

	return (
		<p className="mt-8 text-muted-foreground/60 text-xs tracking-wide">
			{formattedCount} cartas de amor já foram criadas
		</p>
	)
}
