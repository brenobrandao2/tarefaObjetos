let receita = {
    titulo: "Macarrão",
    porcoes: 2,
    ingredientes: ["massa", "molho de tomate", "carne moída"]
}

console.log(receita.titulo);
console.log("Porções: "+ receita.porcoes);
console.log("Ingredientes:");
receita.ingredientes.forEach(item => {
    console.log(item);
});

let livros = [
    {
        titulo: "Harry Potter",
        autor: "J. K. Rowling",
        livroLido: 1,
    },
    {
        titulo: "Chapeuzinho vermelho",
        autor: "Charles Perrault",
        livroLido: 1,
    },
    {
        titulo: "Como fazer amigos e influenciar pessoas",
        autor: "Dale Carnegie",
        livroLido: 0,
    },
    {
        titulo: "A Cabana",
        autor: "William P. Young",
        livroLido: 0,
    }
]

livros.forEach(livro => {
    const isRead = livro.livroLido ? "Você já leu esse livro - " : "Você não leu esse livro - ";
    console.log(isRead + livro.titulo +" - "+livro.autor)
});