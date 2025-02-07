var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var linguado;

function preload (){ 
   
    // carregar o fundo 
    this.load.image('mar', 'assets/bg_azul-claro.png');

    // carregar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    
    // carregar o peixe
    this.load.image('peixe', 'assets/peixe/peixe_amarelo.png');
    
    // carregar o elemento
    this.load.image('elemento', 'assets/novo_elemento.png');
}

function create (){
    
    // adicionar o fundo na tela
    this.add.image(400, 300, 'mar');

    // adicinar o elemento na tela
    this.add.image(400, 300, 'elemento');

    // adicionar o logo na tela
    this.add.image(400, 75, 'logo').setScale(0.5);

    //guardar o peixe na variável linguado
    linguado = this.add.image(400, 300, 'peixe')
    
    // transformando a variável linguado
    linguado.setFlip(true, false);
}


function update () {
    
    // movimentar o peixe
    linguado.x = this.input.x;
    linguado.y = this.input.y;
}