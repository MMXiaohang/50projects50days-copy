const tagEl = document.getElementById('tag')
const textarea = document.getElementById('textarea')

textarea.focus()


textarea.addEventListener('keyup', e => {
    createTags(e.target.value);
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

const createTags = (input) => {
    const tags = input.split(',').filter(tag => tag.trim() !== '')
}


const randomSelect = () => {

}