import { CalculadoraPreco } from "./utils/calculadora";
import { GerenciadorBatalha } from "./utils/batalha";
import { CalculadoraDelivery } from "./utils/delivery";
import { ProcessadorPix } from "./utils/banco";
import { GestorEmprestimos } from "./utils/biblioteca";
import { GestorEstoque } from "./utils/estoque";


//CALCULADORA

const calculadora = new CalculadoraPreco();

const resultadoPedido = calculadora.gerarResumoPedido({
    nomeProduto: "Tênis Esportivo",
    preco: 200,
    desconto: 10,
    distancia: 8
});

console.log(resultadoPedido);

//BATALHA

const batalha = new GerenciadorBatalha();

const resultadoBatalha = batalha.processarTurno({
    nomeAtacante: "Guerreiro",
    nomeDefensor: "Orc",
    danoAtaque: 50,
    defesaDefensor: 20,
    ehGolpeCritico: true
});

console.log(resultadoBatalha);

//DELIVERY

const delivery = new CalculadoraDelivery();

const resultadoDelivery = delivery.calcularEntrega({
    distanciaKm: 10,
    valorPedido: 80,
    estaChovendo: true
});

console.log(resultadoDelivery);

//PIX

const pix = new ProcessadorPix();

const resultadoPix = pix.processarCobranca({
    nomeEmpresa: "Tech Store",
    valorTransacao: 1000,
    tipoChave: "CNPJ",
    ehClientePremium: true
});

console.log(resultadoPix);

//BIBLIOTECA

const biblioteca = new GestorEmprestimos();

const resultadoBiblioteca = biblioteca.calcularPrazoDevolucao({
    tituloLivro: "O Senhor dos Anéis",
    diasPadrao: 14,
    ehEstudante: true,
    diasAtrasoAnterior: 3
});

console.log(resultadoBiblioteca);

//ESTOQUE

const estoque = new GestorEstoque();

const resultadoEstoque = estoque.avaliarNecessidadeReposicao({
    nomeProduto: "Teclado Mecânico",
    quantidadeAtual: 10,
    estoqueMinimo: 20,
    tamanhoLote: 10
});

console.log(resultadoEstoque);