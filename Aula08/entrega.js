function carro(marca, modelo, ano, cor, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;

    this.apresentar = function () {
        console.log("O carro " + this.marca.toUpperCase() + " " + this.modelo + ", ano " + this.ano + ", cor " + this.cor + ", tem o preço de R$" + this.preco)
    }
}



const carro1 = new carro("Hyundai", "Creta", 2019, "Branco", 85000)
const carro2 = new carro("Jeep", "Compass", 2020, "Preto", 140000)
const carro3 = new carro("Fiat", "Sportback", 2023, "Vermelho", 145000)
const carro4 = new carro("Honda", "Civic", 2021, "Prata", 130000)

carro1.apresentar();
carro2.apresentar();
carro3.apresentar();
carro4.apresentar();


