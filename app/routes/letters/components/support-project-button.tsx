import { CoffeeIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'

export function SupportProjectButton() {
	const mpLink = 'https://mpago.la/1x23uo4'

	return (
		<Button variant="outline" size="lg" asChild>
			<a href={mpLink} target="_blank" rel="noopener noreferrer">
				<CoffeeIcon className="size-5" />
				Apoiar o projeto
			</a>
		</Button>
	)
}
