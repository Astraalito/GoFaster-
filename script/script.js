
var espace;
var Aj1, Aj2;
var Bj1, Bj2;
var Xj1, Xj2;
var Yj1, Yj2;
var j1Pos = 700;
var j2Pos = 700;
var instance;
var boutonActuel;

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
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

    //chargement des sprite des boutons
    this.load.image('button1', 'ressources/img/sprite/buttons/buttonA.png');
    this.load.image('button2', 'ressources/img/sprite/buttons/buttonB.png');
    this.load.image('button3', 'ressources/img/sprite/buttons/buttonX.png');
    this.load.image('button4', 'ressources/img/sprite/buttons/buttonY.png');
    
    //chargement audio
    this.load.audio('course', 'ressources/sound/musique/course.mp3');

    //chargement des input
    espace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    Aj1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    Aj2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    Bj1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    Bj2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    Xj1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    Xj2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

    Yj1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    Yj2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
}

function create ()
{
    //Joue la musique au lancement
    music = this.sound.play('course');

    instance = this;

    this.sky = this.add.image(960, 330, 'ciel');

    sol2 = this.physics.add.sprite(0, -210, 'sol2').setOrigin(0, 0);
    sol3 = this.physics.add.sprite(1920, -210, 'sol2').setOrigin(0, 0);

    sol1 = this.physics.add.sprite(0, -190, 'sol1').setOrigin(0, 0);
    sol4 = this.physics.add.sprite(1920, -190, 'sol1').setOrigin(0, 0);

    soleil= this.physics.add.sprite(900, 380, 'soleil');
    nuage1 = this.physics.add.sprite(700, 300, 'nuage1');
    nuage2 = this.physics.add.sprite(960, 300, 'nuage2');

    perso1 = this.physics.add.sprite(j1Pos, 410, 'elvis').setOrigin(0, 0); //TODO changer le personnage en fonction de la selection
    perso2 = this.physics.add.sprite(j2Pos, 570, 'elvis').setOrigin(0, 0);

    button = instance.physics.add.sprite((screen.width/2), (screen.height/4), `button1`);
    button.visible = false;

    tempsInitial = new Date().getTime();
}

function update () 
{
    //chaques frame, la variable tempsActu sera changée pour garder un chronomètre a jour
    tempsActu = new Date().getTime();

    //appel de la fonction pour que la map soit animée
    //avec en parametre la vitesse
    defilementMap(800);
    
    //choix et affichage avec en paramètre le nombre de milliseconde avant de relancer la fonction
    choixInput(3000)

    if(boutonActuel == 1){
        inputJoueursA();
    }

    if(boutonActuel == 2){
        inputJoueursB();
    }

    if(boutonActuel == 3){
        inputJoueursX();
    }

    if(boutonActuel == 4){
        inputJoueursY();
    }
    
    //si l'un des persos sort de l'écran par la gauche, la partie est terminée
    if (perso1.x < 0 || perso1.x > 1920 || perso2.x < 0 || perso2.x > 1920) {        
        mort = this.physics.add.sprite(0, 410, 'mort').setOrigin(0, 0);   
    }
}

function choixInput(counter)
{
    if(tempsActu > tempsInitial + counter){
        //choisi un nombre aléatoire entre 1 et 4
        num = Math.floor((Math.random() * Math.floor(4)) + 1);
        
        button.visible = true;

        //change la texture du bouton
        button.setTexture(`button${num}`, 0);

        boutonActuel = num;

        //remet le compteur a zéro
        tempsInitial = new Date().getTime();
    }
}