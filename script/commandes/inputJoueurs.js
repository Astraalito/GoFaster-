"use strict";

//touche A
function inputJoueursA()
{
    if (Phaser.Input.Keyboard.JustDown(Aj1)) {  
        button.visible = false;
        boutonActuel = 0;
        return j1Win();
    }

    if (Phaser.Input.Keyboard.JustDown(Aj2)) {
        button.visible = false;
        boutonActuel = 0;
        return j2Win();
    }
}
//touche B
function inputJoueursB()
{
    if (Phaser.Input.Keyboard.JustDown(Bj1)) {    
        button.visible = false; 
        boutonActuel = 0;
        return j1Win();
    }

    if (Phaser.Input.Keyboard.JustDown(Bj2)) {
        button.visible = false;
        boutonActuel = 0;
        return j2Win();
    }
}

//touche X
function inputJoueursX()
{
    if (Phaser.Input.Keyboard.JustDown(Xj1)) {  
        button.visible = false;
        boutonActuel = 0;
        return j1Win();
    }

    if (Phaser.Input.Keyboard.JustDown(Xj2)) {
        button.visible = false;
        boutonActuel = 0;
        return j2Win();
    }
}

//touche Y
function inputJoueursY()
{
    if (Phaser.Input.Keyboard.JustDown(Yj1)) {    
        button.visible = false;    
        boutonActuel = 0; 
        return j1Win();
    }
    
    if (Phaser.Input.Keyboard.JustDown(Yj2)) {
        button.visible = false;
        boutonActuel = 0;
        return j2Win();
    }
}

function j1Win(){
    j1Pos += 100;
    j2Pos -= 100;
    perso1.x = j1Pos;
    perso2.x = j2Pos;
}

function j2Win(){
    j1Pos -= 100;
    j2Pos += 100;
    perso1.x = j1Pos;
    perso2.x = j2Pos;
}
