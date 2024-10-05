document.addEventListener('DOMContentLoaded', () => {
    const includeInput = document.getElementById('include-actives');
    const button = document.getElementById('button');
    const listActives = document.getElementById('list-actives');
    button.addEventListener('click', includeItem);
    includeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            includeItem();
        }
    });
    listActives.addEventListener('click', handleListClick);
    function includeItem() {
        const includeText = includeInput.value.trim();
        if (includeText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                ${includeText}
                <div class="buttons">
                    <button class="update">Modificar Info</button>
                </div>
            `;
            listActives.appendChild(li);
            includeInput.value = '';
            includeInput.focus();
        }
    }
    function handleListClick(e) {
        const target = e.target;
        const li = target.closest('li');
        if (target.classList.contains('update')) {
            handleUpdate(li);
        }
    }
    function handleUpdate(li) {
        const currentText = li.firstChild.textContent.trim();
        li.innerHTML = `
            <input type="text" placeholder="Digite o novo texto para essa tarefa" value="${currentText}">
            <div class="buttons">
                <button class="confirm">Confirmar</button>
            </div>
        `;
        const inputUpdated = li.querySelector('input');
        inputUpdated.focus();
        inputUpdated.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                confirmUpdate(li, inputUpdated.value.trim());
            }
        });
        const confirmButton = li.querySelector('.confirm');
        confirmButton.addEventListener('click', () => {
            confirmUpdate(li, inputUpdated.value.trim());
        });
    }
    function confirmUpdate(li, newText) {
        if (newText !== '') {
            li.innerHTML = `
                ${newText}
                <div class="buttons">
                    <button class="update">Modificar Info</button>
                </div>
            `;
        }
    }
});