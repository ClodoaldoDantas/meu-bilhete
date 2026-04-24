import { LetterCardEditor } from '../home/components/letter-card-editor'
import { LettersCounter } from '../home/components/letters-counter'
import type { Route } from './+types/index'

export function meta(): Route.MetaDescriptors {
	return [
		{ title: 'Criar Carta | Meu Bilhete' },
		{
			name: 'description',
			content: 'Crie sua cartinha de amor para alguém especial',
		},
	]
}

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

export default function CreateLetter({ loaderData }: Route.ComponentProps) {
	return (
		<main className="min-h-screen bg-olive-50 flex flex-col items-center justify-center px-4 py-12">
			<LetterCardEditor />
			<LettersCounter count={loaderData.count} />
		</main>
	)
}
