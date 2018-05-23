export class LoginCadastro {
    id : number;
    nome : string;
    email : string;
    senha : string;
    dataInclusao : string;

    constructor(){
        this.id = 0;
        this.nome = "";
        this.email = "";
        this.senha = "";
        this.dataInclusao = "";
    }
    //seters
    public setNome(tp){
        this.nome = tp;
    }
    public setEmail(tp){
        this.email = tp;
    }
    public setSenha(tp){
        this.senha = tp;
    }

}