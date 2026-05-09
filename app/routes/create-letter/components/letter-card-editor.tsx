import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon, MailIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '~/components/ui/button'

const MESSAGE_LIMIT = 200

const createLetterSchema = z.object({
	recipient: z.string().trim().min(1, 'Informe o destinatário.'),
	message: z
		.string()
		.trim()
		.min(1, 'Escreva uma mensagem.')
		.max(
			MESSAGE_LIMIT,
			`A mensagem deve ter no máximo ${MESSAGE_LIMIT} caracteres.`,
		),
	sender: z.string().trim().min(1, 'Informe o seu nome.'),
})

const createLetterResponseSchema = z.object({
	id: z.string().trim().min(1),
})

type CreateLetterFormData = z.infer<typeof createLetterSchema>

export function LetterCardEditor() {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		watch,
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

	const recipientInputRef = useRef<HTMLInputElement>(null)
	const recipientRegister = register('recipient')

	const messageValue = watch('message') ?? ''
	const messageLength = messageValue.length

	useEffect(() => {
		recipientInputRef.current?.focus()
	}, [])

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

		const body = await response.json()
		const parsedBody = createLetterResponseSchema.safeParse(body)

		if (!parsedBody.success) {
			toast.error('Não foi possível abrir sua carta. Tente novamente.')
			return
		}

		reset()
		navigate(`/letter/${parsedBody.data.id}`)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full flex flex-col items-center"
		>
			<div className="w-full max-w-lg bg-white border border-zinc-900 p-8 md:p-10 shadow-sm">
				<input
					type="text"
					placeholder="Destinatário"
					{...recipientRegister}
					ref={(element) => {
						recipientInputRef.current = element
						recipientRegister.ref(element)
					}}
					className="w-full bg-transparent border-none outline-none text-base md:text-lg font-semibold text-foreground placeholder:text-muted-foreground/60"
				/>

				<textarea
					{...register('message')}
					spellCheck="false"
					maxLength={MESSAGE_LIMIT}
					className="w-full h-40 mt-6 bg-transparent border-none outline-none resize-none leading-relaxed text-muted-foreground placeholder:text-muted-foreground/50 text-sm md:text-base"
					placeholder="Escreva sua mensagem aqui... Seja sincero(a) e deixe seu coração falar!"
					aria-describedby="message-counter"
				/>

				<div className="mt-2">
					<p
						id="message-counter"
						className={`text-sm text-right ${
							messageLength >= MESSAGE_LIMIT
								? 'text-destructive'
								: 'text-muted-foreground/50'
						}`}
						aria-live="polite"
					>
						{messageLength}/{MESSAGE_LIMIT}
					</p>
				</div>

				<div className="mt-8 text-right">
					<p className="text-sm md:text-base font-semibold text-foreground mb-1">
						Com amor,
					</p>

					<input
						type="text"
						{...register('sender')}
						className="bg-transparent border-none outline-none text-sm md:text-base text-muted-foreground text-right w-full placeholder:text-muted-foreground/60"
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
				{isSubmitting ? (
					<>
						<LoaderIcon className="size-5 animate-spin" />
						Criando...
					</>
				) : (
					<>
						<MailIcon className="size-5" />
						Criar carta
					</>
				)}
			</Button>
		</form>
	)
}
