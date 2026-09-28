export interface AvaliarEstoqueInput {
    nomeProduto: string;
    quantidadeAtual: number;
    estoqueMinimo: number;
    tamanhoLote: number;
}

export class GestorEstoque {

    avaliarNecessidadeReposicao({
        nomeProduto,
        quantidadeAtual,
        estoqueMinimo,
        tamanhoLote
    }: AvaliarEstoqueInput): string {

        if (quantidadeAtual <= estoqueMinimo) {

            const estoqueAlvo = estoqueMinimo * 2;

            const quantidadeFaltante =
                estoqueAlvo - quantidadeAtual;

            const quantidadeLotes =
                Math.ceil(quantidadeFaltante / tamanhoLote);

            return `[ESTOQUE ALERTA] Produto: ${nomeProduto} | Atual: ${quantidadeAtual} | Sugestão de Compra: ${quantidadeLotes} lote(s)`;
        }

        return `[ESTOQUE OK] Produto: ${nomeProduto} | Nível seguro (${quantidadeAtual} un)`;
    }
}