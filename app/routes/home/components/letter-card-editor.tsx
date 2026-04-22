import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '~/components/ui/button'

const createLetterSchema = z.object({
	recipient: z.string().trim().min(1, 'Informe o destinatário.'),
	message: z.string().trim().min(1, 'Escreva uma mensagem.'),
	sender: z.string().trim().min(1, 'Informe o seu nome.'),
})

type CreateLetterFormData = z.infer<typeof createLetterSchema>

export function LetterCardEditor() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isValid },
		reset,
	} = useForm<CreateLetterFormData>({
		resolver: zodResolver(createLetterSchema),
		mode: 'onChange',
		defaultValues: {
			recipient: '',
			message: '',
			sender: '',
		},
	})

	const onSubmit = async (data: CreateLetterFormData) => {
		const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

		const response = await fetch(new URL('/letters', apiBaseUrl), {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				sender: data.sender,
				recipient: data.recipient,
				message: data.message,
			}),
		})

		if (!response.ok) {
			toast.error('Não foi possível criar sua carta. Tente novamente.')
			return
		}

		reset()
		toast.success('Carta criada com sucesso!')
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full flex flex-col items-center"
		>
			<div className="w-full max-w-md bg-white border border-zinc-900 p-8 md:p-10 shadow-sm">
				<div className="flex items-baseline">
					<span className="text-lg shrink-0 font-semibold text-foreground">
						Meu amor,
					</span>

					<input
						type="text"
						placeholder="Destinatário"
						{...register('recipient')}
						className="w-full bg-transparent border-none outline-none text-lg text-muted-foreground ml-1 placeholder:text-muted-foreground/60"
					/>
				</div>
				<textarea
					{...register('message')}
					className="w-full h-40 mt-6 bg-transparent border-none outline-none resize-none leading-relaxed text-muted-foreground placeholder:text-muted-foreground/50 text-base"
					placeholder="Escreva sua mensagem aqui... Seja sincero(a) e deixe seu coração falar!"
				/>

				<div className="mt-8 text-right">
					<p className="text-base font-semibold text-foreground mb-1">
						Com amor,
					</p>

					<input
						type="text"
						{...register('sender')}
						className="bg-transparent border-none outline-none text-base text-muted-foreground text-right w-full placeholder:text-muted-foreground/60"
						placeholder="Seu nome"
					/>
				</div>
			</div>

			<Button
				size="lg"
				className="mt-10"
				type="submit"
				disabled={isSubmitting || !isValid}
			>
				{isSubmitting ? 'Enviando...' : 'Continuar'}
			</Button>
		</form>
	)
}
