class Biblioteca{
    constructor(id, titulo, autor,){
     this.id = id;
     this.titulo = titulo;
     this.autor = autor;
     this.status = true;
    }

    adicionar_Livro(id,titulo,autor){
      this.id = "";
      this.titulo ="";
      this.autor = "";
      this.status = true;

    }
}
 //EXEMPLOS
Minha_Biblioteca = new Biblioteca()
Minha_Biblioteca.adicionar_Livro( 2,"O Homem de Giz","C.J Tudor",true );

//saida
Minha_Biblioteca.adicionar_Livro()
console.log("adicionar Livro:");
console.log("ID:", Minha_Biblioteca.id);
console.log("titulo:", Minha_Biblioteca.titulo);
console.log("autor:", Minha_Biblioteca.autor);
console.log("status:",Minha_Biblioteca.status );
