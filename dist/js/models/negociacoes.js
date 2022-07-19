export class Negociacoes {
    constructor() {
        //Array<Negociacao>
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}
