import "./style.css"

export default function List({ titulo = "Anotações e Exemplos de FullStack" }) {
    return (
        <>
        <div id="information">
            <p id="title-list">| {titulo}</p>
            <p id="introducao">Esse arquivo em html contém a atividade de desenvolvimento frontend, a atividade consiste nos seguintes tópicos: </p>
            <div id="topicos">
                <ul>
                    <li>Crie uma página HTML básica com cabeçalho, corpo e rodapé</li>
                    <li>Utilize listas ordenadas e não ordernadas para organizar informações</li>
                    <li>Incorpore imagens e vídeos usando tags HTML apropriadas</li>
                    <li>Estilize com tag, classe e ID</li>
                    <li>Utilize diferentes unidades de medida para posicionamento e tamanho de elementos</li>
                    <li>Crie um layout flexível - Flexbox</li>
                    <li>Faça uma página responsiva usando Grid Layout</li>
                </ul>
            </div>
        </div>
        </>
    )
}