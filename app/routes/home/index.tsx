import { LetterCardEditor } from './components/letter-card-editor'
import { LettersCounter } from './components/letters-counter'

export function meta() {
	return [
		{ title: 'Meu Bilhete' },
		{
			name: 'description',
			content: 'Crie sua cartinha de amor para alguém especial',
		},
	]
}

export default function Home() {
	return (
		<main className="min-h-screen bg-olive-50 flex flex-col items-center justify-center px-4 py-12">
			<LetterCardEditor />
			<LettersCounter />
		</main>
	)
}
