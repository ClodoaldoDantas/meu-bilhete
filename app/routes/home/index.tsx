import type { Route } from './+types/index'

export function meta(): Route.MetaDescriptors {
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
			<h1>Meu Bilhete</h1>
		</main>
	)
}
