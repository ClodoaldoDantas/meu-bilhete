import { CheckIcon, ClipboardIcon, Share2Icon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'

export function CopyLetterUrlButton() {
	const [isCopied, setIsCopied] = useState(false)
	const [isShareSupported, setIsShareSupported] = useState(false)
	const resetTimerRef = useRef<number | null>(null)

	useEffect(() => {
		setIsShareSupported(typeof navigator.share === 'function')

		return () => {
			if (resetTimerRef.current) {
				window.clearTimeout(resetTimerRef.current)
			}
		}
	}, [])

	const scheduleStateReset = () => {
		if (resetTimerRef.current) {
			window.clearTimeout(resetTimerRef.current)
		}

		resetTimerRef.current = window.setTimeout(() => {
			setIsCopied(false)
		}, 2000)
	}

	const handleShareOrCopyUrl = async () => {
		const letterUrl = window.location.href

		if (isShareSupported) {
			try {
				await navigator.share({
					title: document.title,
					url: letterUrl,
				})
			} catch (error) {
				if (error instanceof DOMException && error.name === 'AbortError') {
					return
				}

				toast.error(
					'Não foi possível compartilhar esta carta. Tente novamente.',
				)
			}

			return
		}

		try {
			await navigator.clipboard.writeText(letterUrl)
			setIsCopied(true)
			scheduleStateReset()
		} catch {
			toast.error('Não foi possível copiar o link da carta. Tente novamente.')
		}
	}

	return (
		<Button size="lg" type="button" onClick={handleShareOrCopyUrl}>
			{isCopied ? (
				<>
					<CheckIcon className="size-5 text-green-400" />
					Copiado!
				</>
			) : isShareSupported ? (
				<>
					<Share2Icon className="size-5" />
					Compartilhar
				</>
			) : (
				<>
					<ClipboardIcon className="size-5" />
					Copiar URL
				</>
			)}
		</Button>
	)
}
