document.getElementById("address").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "").slice(0, 8);
    if (value.length > 5) {
        value = value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    }
    e.target.value = value;
});
document.getElementById("tel").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (value.length > 10) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{0,4})/, "($1) $2");
    } else {
        value = value.replace(/(\d*)/, "($1");
    }
    e.target.value = value;
});
document.getElementById("btn-submit").addEventListener("click", function () {
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("tel").value;
    const cep = document.getElementById("cep").value;
    alert(`Dados Enviados:
        Nome: ${nome}
        E-mail: ${email}
        Telefone: ${telefone}
        CEP: ${cep}`
    );
});
