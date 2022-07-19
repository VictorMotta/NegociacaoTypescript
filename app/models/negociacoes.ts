import { Negociacao } from "./negociacao.js";

export class Negociacoes {
                    //Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
            //ReadonlyArray<Negociacao>
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

}