const categoryBox = document.querySelectorAll('.box .category-box');

categoryBox.forEach((element) => {
    element.addEventListener('click', (e) => {
        // pega a lista (ul) que é "irmão" do elemento clicado
        let list = e.currentTarget.nextElementSibling;
        
        // pega a box (.box) que é o "pai" do elemento clicado
        let box = e.currentTarget.parentElement;
        
        // troca os valores da classe da lista (ul), ou seja, esconder o conteúdo para mostrar o conteúdo e vice-versa
        list.classList.toggle("hide-info");

        // troca os valores da classe do "box" (esconder o conteúdo para mostrar o conteúdo e vice-versa)
        box.classList.toggle("show-info");
    })
});