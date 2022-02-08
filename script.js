const categoryBox = document.querySelectorAll('.box .category-box');

categoryBox.forEach((element) => {
    element.addEventListener('click', (e) => {
        // pega a lista (ul) que é "irmão" do elemento clicado
        let list = e.currentTarget.nextElementSibling;
        
        // troca os valores do "display" em css
        if(list.style.display == "block") {
            list.style.display = "none";
        }else {
            list.style.display = "block";
        }
    })
});