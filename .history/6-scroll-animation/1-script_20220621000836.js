const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    // innerHeight返回窗口内容区域的高度
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        //getBoundingClientRect().top返回dom的上边框到视窗上边的距离
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })

}