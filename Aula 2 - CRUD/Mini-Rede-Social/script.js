// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function (){
    mostrarPosts();

    document.querySelector("#postForm").addEventListener('submit', addPost);
}


function addPost(infosDoEvento){
    infosDoEvento.preventDefault();

    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagePost = document.querySelector("#postImage").value;

    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagePost,
        date: new Date().toLocaleDateString()
    }

    posts.unshift(novoPost);

    mostrarPosts();
}


function mostrarPosts(){
    // Pega o elemento que terá a lista de posts no html
    const listaPosts = document.querySelector("#postList"); 
    
    // Passa por cada item do array, criando um card de post
    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div");
        
        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            ${pegaItem.image? `<img src= ${pegaItem.image} />` : ""}
            <p><b>Categoria: </b>${pegaItem.category}</p>
            <p><b>Data e Hora: </b>${pegaItem.date}</p>
            <button>Editar</button>
            <button>Apagar</button>
        `;
        // Adiciona o post na lista de posts no HTML
        listaPosts.append(cardPost);
    })
}
