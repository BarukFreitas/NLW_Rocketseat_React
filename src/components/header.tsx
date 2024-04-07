import iconeHeader from "../assets/icone-header.svg"
import { NavLink } from "./nav-link"

export function Header () {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={iconeHeader} />

            <nav className="flex items-center gap-5">
                <NavLink href="/Eventos">Eventos</NavLink>
                <NavLink href="/Participantes">Participantes</NavLink>
            </nav>
        </div>
    )
}