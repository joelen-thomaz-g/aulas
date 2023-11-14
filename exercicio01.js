class Carro {
    marca;
    cor;
    consumoMedioPorKm;
    constructor(marca, cor, consumoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    }

    valorGastoViagem(distanciaEmKm, precoCombustivel) {
        const litrosConsumidos = distanciaEmKm / this.consumoMedioPorKm;
        console.log(litrosConsumidos);
        const total = litrosConsumidos * precoCombustivel;
        console.log(`O gasto total da viagem será de R$ ${total.toFixed(2)}`);
    }
}

const fusca = new Carro("Volkswagen", "branco", 10);
fusca.valorGastoViagem(100, 5.89);

const celta = new Carro("Chevrolet", "preto", 14);
celta.valorGastoViagem(100, 5.89);