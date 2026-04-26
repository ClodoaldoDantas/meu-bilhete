import { LetterCard } from '~/components/letter-card'
import type { Route } from './+types/$id'
import { CopyLetterUrlButton } from './components/copy-letter-url-button'
import { SupportProjectButton } from './components/support-project-button'

type Letter = {
	id: string
	sender: string
	recipient: string
	message: string
	createdAt: string
}

export async function loader({ params }: Route.LoaderArgs) {
	const id = params.id

	if (!id) {
		throw new Response('Letter id is required', { status: 400 })
	}

	const apiBaseUrl = process.env.VITE_API_BASE_URL
	const response = await fetch(new URL(`/letters/${id}`, apiBaseUrl))

	if (response.status === 404) {
		throw new Response('Letter not found', { status: 404 })
	}

	if (!response.ok) {
		throw new Response('Could not load letter', { status: 502 })
	}

	const data = (await response.json()) as Letter

	return { letter: data }
}

export function meta({ loaderData }: Route.MetaArgs): Route.MetaDescriptors {
	return [
		{ title: `Carta para ${loaderData.letter.recipient} | Meu Bilhete` },
		{
			name: 'description',
			content: `Carta de ${loaderData.letter.sender} para ${loaderData.letter.recipient}.`,
		},
	]
}

export default function LetterDetails({ loaderData }: Route.ComponentProps) {
	const { letter } = loaderData

	return (
		<main className="min-h-dvh bg-olive-50 flex flex-col items-center justify-center px-4 py-12">
			<div className="w-full flex flex-col items-center">
				<LetterCard letter={letter} />

				<div className="flex items-center gap-4 mt-10">
					<CopyLetterUrlButton />
					<SupportProjectButton />
				</div>
			</div>
		</main>
	)
}
