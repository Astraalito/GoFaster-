var espace;
var Aj1, Aj2;
var Bj1, Bj2;
var Xj1, Xj2;
var Yj1, Yj2;

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
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
    //chargement images et sprite
    this.load.image('sol1', 'ressources/img/map/base/sol1.png');
    this.load.image('sol2', 'ressources/img/map/base/sol2.png');
    this.load.image('ciel', 'ressources/img/map/base/ciel.png');

    this.load.image('soleil', 'ressources/img/map/base/soleil.png');
    this.load.image('nuage1', 'ressources/img/map/base/nuage1.png');
    this.load.image('nuage2', 'ressources/img/map/base/nuage2.png');

    this.load.image('elvis', 'ressources/img/sprite/elvis/elvis.png');

    this.load.image('mort', 'ressources/img/sprite/death/mort.png');
    
    //chargement audio
    this.load.audio('course', 'ressources/sound/musique/course.mp3');

    //chargement des input
    espace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    Aj1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    Aj2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD8);

    Bj1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    Bj2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD6);

    Xj1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    Xj2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD2);

    Yj1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    Yj2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD4);
}

function create ()
{
    this.sky = this.add.image(960, 330, 'ciel');

    sol2 = this.physics.add.sprite(0, -210, 'sol2').setOrigin(0, 0);
    sol3 = this.physics.add.sprite(1920, -210, 'sol2').setOrigin(0, 0);

    sol1 = this.physics.add.sprite(0, -190, 'sol1').setOrigin(0, 0);
    sol4 = this.physics.add.sprite(1920, -190, 'sol1').setOrigin(0, 0);

    this.soleil= this.add.image(900, 380, 'soleil');
    this.nuage1 = this.add.image(700, 300, 'nuage1');
    this.nuage2 = this.add.image(960, 300, 'nuage2');

    perso1 = this.physics.add.sprite(700, 410, 'elvis').setOrigin(0, 0); //TODO changer le personnage en fonction de la selection
    perso2 = this.physics.add.sprite(700, 570, 'elvis').setOrigin(0, 0);


    //Joue la musique au lancement
    //music = this.sound.play('course');
}

function update () 
{

    if (perso1.x < 0 || perso1.x > 1920 || perso2.x < 0 || perso2.x > 1920) {        
        mort = this.physics.add.sprite(0, 410, 'mort').setOrigin(0, 0);   
    }


    //retour a droite de l'écran si sort à gauche
    if (sol1.x <= -1920) {sol1.x = (sol4.x + sol1.width)};
    if (sol2.x <= -1920) {sol2.x = (sol3.x + sol2.width)};

    if (sol3.x <= -1920) {sol3.x = (sol2.x + sol3.width)};
    if (sol4.x <= -1920) {sol4.x = (sol1.x + sol4.width)};

    //défilement du terrain
    //terrain du bas
    sol2.setVelocityX(-580);
    sol3.setVelocityX(-580);

    //terrain du haut
    sol1.setVelocityX(-600);
    sol4.setVelocityX(-600);

    if (Phaser.Input.Keyboard.JustDown(espace)) {        
        perso1.x = perso1.x -50 ;
    }



}