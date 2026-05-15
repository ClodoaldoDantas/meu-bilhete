import { MailIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { Button } from '~/components/ui/button'
import { config } from '~/config'
import { SupportProjectButton } from './support-project-button'

export function LandingHero() {
	const navigate = useNavigate()

	return (
		<section className="w-full flex flex-col items-center">
			<div className="flex flex-col items-start gap-2 w-full max-w-lg">
				<div className="border border-zinc-900 px-3 py-1 text-xs font-semibold uppercase">
					{config.appName}
				</div>

				<h1 className="text-4xl md:text-5xl font-semibold leading-tight">
					Palavras que Permanecem
				</h1>

				<p className="text-base md:text-lg text-muted-foreground mt-2">
					Transforme seus sentimentos em cartas digitais elegantes e sinceras.
					Uma experiência tátil traduzida para o digital.
				</p>

				<div className="mt-6 flex flex-col gap-4 md:flex-row">
					<Button
						size="lg"
						className="uppercase"
						onClick={() => navigate('/letter/create')}
					>
						<MailIcon className="size-5" />
						Criar minha carta
					</Button>

					<SupportProjectButton />
				</div>
			</div>
		</section>
	)
}
