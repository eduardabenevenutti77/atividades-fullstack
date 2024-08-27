import { useState } from "react"
import "./style.css"

export default function Forms () {
    const [FormData, setFormData] = useState({
        nome: "",
        email: "",
        tel: "",
        address: ""
    });
    const handleChange = (e) => {
        const {name, value} = event.target
        setFormData({
            ...FormData,
            [name]: value
        })
        console.log(name, value)
    }
    return (
        <>
        <p id="title-forms">Utilizando Formulário em HTML</p>
        <form action="#">
            <fieldset>
                <div>
                    <label for="name">Nome do usuário:</label>
                    <input class="form-control" type="text" id="nome" name="nome" value={FormData.name} onChange={handleChange}/>
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input class="form-control" type="email" id="email" name="email" value={FormData.email} onChange={handleChange}/>
                </div>
                <div>
                    <label for="tel">Telefone:</label>
                    <input class="form-control" type="tel" id="tel" name="tel" maxlength="15" value={FormData.tel} onChange={handleChange}/>
                </div>
                <div>
                    <label for="address">CEP:</label>
                    <input class="form-control" type="text" id="address" name="address" max="10" value={FormData.address} onChange={handleChange}/>
                </div>
                <div>
                    <label for="state">Estado de Origem:</label>
                    <select class="form-select" id="state">
                        <option value="SC">SC</option>
                        <option value="PR">PR</option>
                        <option value="SP">SP</option>
                        <option value="RJ">RJ</option>
                        <option value="BA">BA</option>
                        <option value="MG">MG</option>
                        <option value="RS">RS</option>
                        <option value="PE">PE</option>
                    </select>
                </div>
                <div>
                    <label for="city">Cidade de Origem:</label>
                    <select class="form-select" id="city">
                        <option value="Florianópolis">Florianópolis</option>
                        <option value="Curitiba">Curitiba</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Salvador">Salvador</option>
                        <option value="Belo Horizonte">Belo Horizonte</option>
                        <option value="Porto Alegre">Porto Alegre</option>
                        <option value="Recife">Recife</option>
                    </select>
                </div>
                <div>
                    <button type="submit" class="btn-submit">Enviar</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}