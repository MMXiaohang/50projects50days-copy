const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    // innerHeight返回窗口的文档显示高度
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        //getBoundingClientRect()返回dom相对
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })

}