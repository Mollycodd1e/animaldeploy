import s from './style.module.scss'

interface ISocialsProps {
	isMenuOpen?: boolean | null
}

export const Socials = ({ isMenuOpen }: ISocialsProps) => {
	return (
		<div className={s.socials}>
			<div className={s.socialWrapper}>
				<div>{'VK'}</div> {isMenuOpen && <div className={s.socialName}>{'Telegram'}</div>}
			</div>
			<div className={s.socialWrapper}>
				<div>{'Tg'}</div> {isMenuOpen && <div className={s.socialName}>{'Vkontakte'}</div>}
			</div>
		</div>
	)
}
