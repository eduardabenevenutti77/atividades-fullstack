import List from '../../components/List'
import Forms from '../../components/Forms'
import LinksPages from '../../components/Links'
import "./style.css"

export default function Home() {
    return (
        <div className="container">
            <List titulo='Anotações de FullStack'/>
            <Forms/>
            <LinksPages/>
        </div>
    )
}