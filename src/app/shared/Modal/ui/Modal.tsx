import classNames from 'classnames'
import cls from './Modal.module.scss'
import { Dispatch, KeyboardEvent, MouseEvent, SetStateAction, useCallback, useEffect } from 'react'
import { Portal } from '../../../shared/Portal/Portal'

interface IModalProps {
	className?: string
	children?: React.ReactNode
	isOpen?: boolean
	setIsOpen?: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ className, children, isOpen, setIsOpen }: IModalProps) => {
	const closeHandler = useCallback(() => {
		setIsOpen && setIsOpen(false)
	}, [])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler()
		}
	}, [])

	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation()
	}

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', (e) => onKeyDown(e as any))
		}

		return () => {
			window.removeEventListener('keydown', (e) => onKeyDown(e as any))
		}
	}, [isOpen])

	return (
		<Portal element={document.querySelector('.app') as HTMLElement | undefined}>
			<div className={classNames(cls.root, { [cls.opened]: isOpen }, [className])}>
				<div
					className={cls.overlay}
					onClick={() => setIsOpen && setIsOpen((prev) => !prev)}
					onKeyDown={onKeyDown}>
					<div
						className={cls.content}
						onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
