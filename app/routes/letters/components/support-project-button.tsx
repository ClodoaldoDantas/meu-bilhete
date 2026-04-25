import { Button } from '~/components/ui/button'

export function SupportProjectButton() {
	const mpLink = 'https://mpago.la/1x23uo4'

	return (
		<Button size="lg" className="mt-4" asChild>
			<a href={mpLink} target="_blank" rel="noopener noreferrer">
				Apoiar o projeto
			</a>
		</Button>
	)
}
