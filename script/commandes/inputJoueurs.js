"use strict";

// //joueur1
// function inputJoueur(){
//     if (Phaser.Input.Keyboard.JustDown(Aj1) || Phaser.Input.Keyboard.JustDown(Bj1) || Phaser.Input.Keyboard.JustDown(Xj1) || Phaser.Input.Keyboard.JustDown(Yj1)){
//         if((Phaser.Input.Keyboard.JustDown(Aj1) && boutonActuel == 1) ||
//            (Phaser.Input.Keyboard.JustDown(Bj1) && boutonActuel == 2) ||
//            (Phaser.Input.Keyboard.JustDown(Xj1) && boutonActuel == 3) ||
//            (Phaser.Input.Keyboard.JustDown(Yj1) && boutonActuel == 4) ){
//             console.log("j1Win");
//             j1Win();
//            }
//         else{
//             console.log("j2Win");
//             j2Win();
//         }
//     }
//     else if (Phaser.Input.Keyboard.JustDown(Aj2) || Phaser.Input.Keyboard.JustDown(Bj2) || Phaser.Input.Keyboard.JustDown(Xj2) || Phaser.Input.Keyboard.JustDown(Yj2)){
//         if((Phaser.Input.Keyboard.JustDown(Aj2) && boutonActuel == 1) ||
//            (Phaser.Input.Keyboard.JustDown(Bj2) && boutonActuel == 2) ||
//            (Phaser.Input.Keyboard.JustDown(Xj2) && boutonActuel == 3) ||
//            (Phaser.Input.Keyboard.JustDown(Yj2) && boutonActuel == 4) ){
//             console.log("j2Win");
//             j2Win();
//            }
//         else{
//             console.log("j1Win");
//             j1Win();
//         }
//     }
// }

//touche A
function inputJoueursA()
{
    if (Phaser.Input.Keyboard.JustDown(Aj1)) {  
        return j1Win();
    }

    if (Phaser.Input.Keyboard.JustDown(Aj2)) {
        return j2Win();
    }
}
//touche B
function inputJoueursB()
{
    if (Phaser.Input.Keyboard.JustDown(Bj1)) {    
        return j1Win();
    }

    if (Phaser.Input.Keyboard.JustDown(Bj2)) {
        return j2Win();
    }
}

//touche X
function inputJoueursX()
{
    if (Phaser.Input.Keyboard.JustDown(Xj1)) {  
        return j1Win();
    }

    if (Phaser.Input.Keyboard.JustDown(Xj2)) {
        return j2Win();
    }
}

//touche Y
function inputJoueursY()
{
    if (Phaser.Input.Keyboard.JustDown(Yj1)) {    
        return j1Win();
    }
    
    if (Phaser.Input.Keyboard.JustDown(Yj2)) {
        return j2Win();
    }
}

function j1Win(){
    button.visible = false;
    boutonActuel = 0;
    j1Pos += 100;
    j2Pos -= 100;
    perso1.x = j1Pos;
    perso2.x = j2Pos;
    tempsInitial = new Date().getTime();
}

function j2Win(){
    button.visible = false;
    boutonActuel = 0;
    j1Pos -= 100;
    j2Pos += 100;
    perso1.x = j1Pos;
    perso2.x = j2Pos;
    tempsInitial = new Date().getTime();
}
