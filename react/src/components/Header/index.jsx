import "./style.css"

export default function Header() {
    return (
        <>
              <div id="header">
        <div>
            <p id="title"><a href="/frontend/atividade-um.html"></a>1ª Atividade - HTML, Css e JS</p>
        </div>
        <div>
            <div id="header-pages">
                <a href="/frontend/atividade-grid.html">Layout Grid</a>
                <a href="/frontend/atividade-flexbox.html">Layout Flexbox</a>
                <a href="/frontend/todo-list.html">TO DO LIST</a>
            </div>
        </div>
    </div>
        </>
    )
}