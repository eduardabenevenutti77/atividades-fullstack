import { useEffect, useState } from "react"
import "./style.css"
import Cards from "../../components/Cards"

export default function ApiRickAndMorty() {
    const [conteudo, setConteudo] = useState(<>Carregando</>) // controla o elemento html
    async function carregarTodosOsPersonagens() {
        const  requestOptions = {
            method: "GET",
            redirect: "follow",
        } // configura o método e redicionamento da requisção 
        const response = await fetch("https://rickandmortyapi.com/api/character", requestOptions) // o await deixa a função assíncrona - realiza a requisição para api e retorna as informações dos personagens
        if(!response.ok) {
            throw new Error('Erro de requisição');
        }
        const data = await response.json()
        console.log(data)
        return {...data}
    }
    async function listarPersonagens() {
        const { info, results } = await carregarTodosOsPersonagens()
        return results.map(personagem => <Cards key={personagem.id} data={personagem}/>) // retorna um elemento html
        // console.log(results)
    }
    useEffect(() => {
        async function getConteudo() {
           setConteudo( await listarPersonagens()) // toda vez que a página for recarregada as informações do personagens serão mostradas!
        }
        getConteudo()
    }, [])
    return (
        <div className="lista-principal">
            { conteudo }
        </div>
    )
}