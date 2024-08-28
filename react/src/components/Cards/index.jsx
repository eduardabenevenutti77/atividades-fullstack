import "./style.css"

export default function Cards({ data: personagem }) {
    return (
        <div className="card char" key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} />
            <h2>{personagem.name}</h2>
            <div className="char-info">
                <span>
                    <b>Espécie: {personagem.species}</b>
                </span>
                <span>
                    <b>Genêro: {personagem.gender}</b>
                </span>
                <div>
                    <h5>
                        <b>Status: {personagem.status}</b>
                    </h5>
                </div>
            </div>
        </div>
    )
}