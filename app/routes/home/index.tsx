import { LetterCard } from '~/components/letter-card'
import type { Route } from './+types/index'
import { LandingHero } from './components/landing-hero'

export function meta(): Route.MetaDescriptors {
	return [
		{ title: 'Meu Bilhete' },
		{
			name: 'description',
			content: 'Crie sua cartinha de amor para alguém especial',
		},
	]
}

const demoLetter = {
	sender: 'Caio',
	recipient: 'Laura',
	message: `Laura, sua presença ilumina meus dias e faz tudo ficar mais leve.
	Com você, até o silêncio vira carinho.
	Seu sorriso é meu lugar favorito.
	E seu abraço, meu refúgio mais bonito.`,
}

export default function Home() {
	return (
		<main className="min-h-dvh bg-olive-50 px-4 py-12 md:py-16">
			<LandingHero />

			<section className="w-full flex flex-col items-center mt-12">
				<LetterCard letter={demoLetter} />
			</section>
		</main>
	)
}
