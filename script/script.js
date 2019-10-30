var config = {
    type: Phaser.AUTO,
    width: screen.width,
    height: screen.height,
    backgroundColor: '#71c5cf',  // Ciel bleu
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sol1', 'ressources/img/map/base/sol1.png');
    this.load.image('sol2', 'ressources/img/map/base/sol2.png');
    this.load.image('ciel', 'ressources/img/map/base/ciel.png');
}

function create ()
{
    this.add.image(960, 540, 'ciel');
}

function update () 
{

}