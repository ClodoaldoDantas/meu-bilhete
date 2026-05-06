import { PrinterIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'

export function PrintLetterButton() {
	return (
		<Button variant="outline" size="lg" onClick={() => window.print()}>
			<PrinterIcon className="size-5" />
			Imprimir carta
		</Button>
	)
}
