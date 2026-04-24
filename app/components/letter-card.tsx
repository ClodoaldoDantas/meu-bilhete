import loveImage from '~/assets/love.png'

type LetterCardProps = {
	letter: {
		sender: string
		recipient: string
		message: string
	}
}

export function LetterCard({ letter }: LetterCardProps) {
	return (
		<div className="w-full max-w-lg bg-white border border-zinc-900 p-8 md:p-10 shadow-sm">
			<div className="flex items-baseline">
				<span className="text-base md:text-lg shrink-0 font-semibold text-foreground">
					Meu amor,
				</span>
				<p className="w-full text-base md:text-lg text-muted-foreground ml-1">
					{letter.recipient}
				</p>
			</div>

			<p className="w-full h-40 mt-6 leading-relaxed text-muted-foreground text-sm md:text-base overflow-y-auto">
				{letter.message}
			</p>

			<div className="flex items-center justify-between mt-4">
				<img
					src={loveImage}
					alt="Envelope com coração"
					className="w-full max-w-20"
				/>

				<div className="text-right">
					<p className="text-sm md:text-base font-semibold text-foreground mb-1">
						Com amor,
					</p>
					<p className="text-sm md:text-base text-muted-foreground">
						{letter.sender}
					</p>
				</div>
			</div>
		</div>
	)
}
