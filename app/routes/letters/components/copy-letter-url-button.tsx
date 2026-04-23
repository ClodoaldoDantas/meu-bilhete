import { useEffect, useRef, useState } from 'react'
import { Button } from '~/components/ui/button'

export function CopyLetterUrlButton() {
	const [isCopied, setIsCopied] = useState(false)
	const resetTimerRef = useRef<number | null>(null)

	useEffect(() => {
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

	const handleCopyUrl = async () => {
		await navigator.clipboard.writeText(window.location.href)
		setIsCopied(true)

		scheduleStateReset()
	}

	const buttonLabel = isCopied ? 'Copiado!' : 'Copiar URL'

	return (
		<Button size="lg" className="mt-10" type="button" onClick={handleCopyUrl}>
			{buttonLabel}
		</Button>
	)
}
