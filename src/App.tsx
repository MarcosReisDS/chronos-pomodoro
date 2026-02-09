import "./styles/theme.css"
import "./styles/global.css"

import { Heading } from "./components/Heading"
import { TimerIcon } from "lucide-react"

export function App() {
    return (
        <>
            <Heading>
                Olá dois mundos!
                <button><TimerIcon /></button>
            </Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum non exercitationem enim animi, corporis porro natus repellat quisquam facere magnam. Ab ex omnis iusto. Libero ex blanditiis at eius autem.
            </p>
        </>
    )
}