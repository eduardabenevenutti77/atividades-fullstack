import { useEffect, useState } from "react"
import "./style.css"
import Cards from "../../components/Cards"

export default function ApiRickAndMorty() {
    const [conteudo, setConteudo] = useState(<>Carregando</>) // controla o elemento html
    function carregarTodosOsPersonagens() {
        // to do list: carregar os personagens da API com o uso de fetch
        // fazer o uso de mock é mais fácil para lidar com as informações
        
        return {info: [], results: mockResult}
    }
    function listarPersonagens() {
        const { info, results } = carregarTodosOsPersonagens()
        return results.map(personagem => <Cards key={personagem.id} data={personagem}/>) // retorna um elemento html
        // console.log(results)
    }
    useEffect(() => {
        function getConteudo() {
           setConteudo(listarPersonagens()) // toda vez que a página for recarregada as informações do personagens serão mostradas!
        }
        getConteudo()
    }, [])
    return (
        <div className="lista-principal">
            { conteudo }
        </div>
    )
}