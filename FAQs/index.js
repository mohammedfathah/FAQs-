function show(element) {   
    const para = element.nextElementSibling;
    const img = element.children[0]


    if(para.classList.contains('close')){

        img.src = "assets/images/icon-minus.svg"
        para.classList.remove('close')
        para.classList.add('open')
        console.log(element.nextElementSibling);
    }
    else{
        img.src = "assets/images/icon-plus.svg"
        para.classList.remove('open')
        para.classList.add('close')
    }

}