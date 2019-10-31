var config = {
    type: Phaser.AUTO,
    width: screen.width,
    height: screen.height,
    //backgroundColor: '#71c5cf',  // Ciel bleu
    physics: {        
        default: 'arcade',  // Permet d'appliquer un set de mouvements aux objets        
        arcade: {                  
        },    
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    parent: 'Game',
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sol1', 'ressources/img/map/base/sol1.png');
    this.load.image('sol2', 'ressources/img/map/base/sol2.png');
    this.load.image('ciel', 'ressources/img/map/base/ciel.png');

    this.load.image('soleil', 'ressources/img/map/base/soleil.png');
    this.load.image('nuage1', 'ressources/img/map/base/nuage1.png');
    this.load.image('nuage2', 'ressources/img/map/base/nuage2.png');

    this.load.image('elvis', 'ressources/img/sprite/elvis.png');
}

function create ()
{
    this.sky = this.add.image(960, 330, 'ciel');
    this.sol2 = this.add.image(960, 330, 'sol2');
    this.sol1 = this.add.image(960, 350, 'sol1');

    this.soleil= this.add.image(900, 380, 'soleil');
    this.nuage1 = this.add.image(800, 300, 'nuage1');
    //this.nuage2 = this.add.image(960, 300, 'nuage2');

    perso1 = this.add.image(960, 510, 'elvis'); //TODO changer le personnage en fonction de la selection
    perso2 = this.add.image(960, 670, 'elvis');
}

function update () 
{

    if (perso1.y < 0 || perso1.y > 1920 || perso2.y < 0 || perso2.y > 1920) {        
        this.scene.restart();     // On relance le jeu    
    }


}