import "./style.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
        <div id="header">
            <div>
                <Link to="/">
                    <p id="title">Consumindo API do Rick and Morty</p>
                </Link>
            </div>
            <div>
                <div id="header-pages">
                    <Link to="/about">
                        <p>About</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}