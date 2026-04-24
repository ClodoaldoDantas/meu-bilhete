import { LetterCard } from '~/components/letter-card'
import type { Route } from './+types/index'
import { LandingHero } from './components/landing-hero'
import { LettersCounter } from './components/letters-counter'

export async function loader() {
	const apiBaseUrl = process.env.VITE_API_BASE_URL
	const response = await fetch(new URL('/letters/count', apiBaseUrl))

	if (!response.ok) {
		throw new Response('Could not load letters count', { status: 502 })
	}

	const data = (await response.json()) as { count?: number }

	if (typeof data.count !== 'number' || !Number.isFinite(data.count)) {
		throw new Response('Invalid letters count response', { status: 502 })
	}

	return { count: data.count }
}

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

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<main className="min-h-dvh bg-olive-50 px-4 py-12 md:py-16">
			<LandingHero />

			<section className="w-full flex flex-col items-center mt-12">
				<LetterCard letter={demoLetter} />
				<LettersCounter count={loaderData.count} />
			</section>
		</main>
	)
}
