const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    const arr = [e.key, e.charCode, e.keyCode]

    for(let key of arr){
        const dom = document.createElement('div')
        dom.classList.add('small')
        dom.innerText(key)
        insert.appendChild(dom)
    }
})