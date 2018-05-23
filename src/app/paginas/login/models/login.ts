export class Login {
    nome : string;
    email : string;
    senha : string;

    constructor(){
        this.nome = "";
        this.email = "";
        this.senha = "";
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
    //getters
    public getNome() : string{
        return this.nome;
    }
    public getEmail() : string{
        return this.email;
    }
    public getSenha() : string{
        return this.senha;
    }
}