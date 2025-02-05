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
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixe/peixe_amarelo.png');
    this.load.image('elemento', 'assets/novo_elemento.png');
}

function create (){
    this.add.image(400, 300, 'mar');
    this.add.image(400, 300, 'elemento');
    this.add.image(400, 525, 'logo').setScale(0.5);


    AiraMel = this.add.image(400, 300, 'peixe')
    
    AiraMel.setFlip(true, false);
}


function update () {
    AiraMel.x = this.input.x;
    AiraMel.y = this.input.y;
}