"use strict";

function defilementMap(vitesse){

    //retour d'un élement a droite de l'écran si il sort à gauche
    if (sol1.x <= -1920) {sol1.x = (sol4.x + sol1.width)};
    if (sol2.x <= -1920) {sol2.x = (sol3.x + sol2.width)};

    if (sol3.x <= -1920) {sol3.x = (sol2.x + sol3.width)};
    if (sol4.x <= -1920) {sol4.x = (sol1.x + sol4.width)};

    /* -- DEFILEMENT TERRAIN -- */

    //terrain du bas
    sol2.setVelocityX(-vitesse * 0.95);
    sol3.setVelocityX(-vitesse * 0.95);

    //terrain du haut
    sol1.setVelocityX(-vitesse);
    sol4.setVelocityX(-vitesse);

    //nuages
    nuage1.setVelocityX(-vitesse * 0.004);
    nuage2.setVelocityX(-vitesse * 0.04);
}