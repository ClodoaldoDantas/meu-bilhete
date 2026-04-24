import type { Route } from './+types/index'
import { LetterCardEditor } from './components/letter-card-editor'

export function meta(): Route.MetaDescriptors {
	return [
		{ title: 'Criar Carta | Meu Bilhete' },
		{
			name: 'description',
			content: 'Crie sua cartinha de amor para alguém especial',
		},
	]
}

export default function CreateLetter() {
	return (
		<main className="min-h-screen bg-olive-50 flex flex-col items-center justify-center px-4 py-12">
			<LetterCardEditor />
		</main>
	)
}
