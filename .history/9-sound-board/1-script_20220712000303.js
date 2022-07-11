const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()  // 排他， 先把其他的停止
        document.getElementById(sound).play() // 打开自己的
    })

    document.getElementById('buttons').appendChild(btn)
})

const stopSongs = () => {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause();
        song.currentTime = 0;
    })
}