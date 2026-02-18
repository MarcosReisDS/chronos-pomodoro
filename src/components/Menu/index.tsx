import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState } from "react"

type AvailableTheme = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<AvailableTheme>('dark')

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
    }

    return (
        <nav className={styles.menu}>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Ir para a Home"
                title="Ir para a Home"
            >
                <HouseIcon />
            </a>

            <a
                className={styles.menuLink}
                href="#"
                aria-label="Ver Histórico"
                title="Ver Histórico"
            >
                <HistoryIcon />
            </a>

            <a
                className={styles.menuLink}
                href="#"
                aria-label="Configurações"
                title="Configuraçõe"
            >
                <SettingsIcon />
            </a>

            <a
                className={styles.menuLink}
                href="#"
                aria-label="Mudar Tema"
                title="Mudar Tema"
                onClick={handleThemeChange}
            >
                <SunIcon />
            </a>
        </nav>
    )
}