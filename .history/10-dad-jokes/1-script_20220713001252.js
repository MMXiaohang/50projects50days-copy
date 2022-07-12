const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


jokeBtn.addEventListener('click', generateJoke)

async function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    const res = await fetch()
}