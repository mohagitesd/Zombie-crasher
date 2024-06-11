function setup(){
    
    new Canvas(1200,720)
    world.gravity.y = 10;
    deadZone = new Sprite()
    deadZone.width = 1200
    deadZone.height = 10
    deadZone.y = 620
    deadZone.image = 'img/deadZone.png'
    deadZone.img.scale.x = 1.9
    deadZone.collider = 'none'
    //deadZone.debug = 'true'


    Pipe = new Sprite()
    Pipe.x = 200
    Pipe.y = 120
    Pipe.w = 1300
    Pipe.h = 40
    Pipe.image = 'img/tuyaux.png'
    Pipe.img.scale.y = 0.5
    Pipe.collider = 'static'
    //Pipe.debug ='true'



    PipeTurn = new Sprite()
    PipeTurn.image = 'img/tile_0093.png'
    PipeTurn.rotation = 270
    PipeTurn.x = 879
    PipeTurn.y = 120
    PipeTurn.w = 12
    PipeTurn.h = 13
    PipeTurn.scale = 3.27
    PipeTurn.collider = 'static'
    //PipeTurn.debug ='true'


    PipeV = new Sprite()
    PipeV.x = 879
    PipeV.y = 280
    PipeV.h = 40
    PipeV.w = 1315
    PipeV.image = 'img/tuyaux.png'
    PipeV.rotation = 270
    PipeV.scale.x = 0.2
    PipeV.collider = 'static'
    //PipeV.debug ='true'
    
    Sol = new Sprite()
    Sol.x = 600
    Sol.y = 550
    Sol.width = 1075
    Sol.img = 'img/sol.png'
    Sol.scale = 0.8
    Sol.collider = 'static'
    //Sol.debug ='true'

    Poutre = new Sprite ()
    Poutre.x = 440
    Poutre.y = 275
    Poutre.w = 110
    Poutre.h = 345
    Poutre.img = 'img/poutreRouille.png'
    Poutre.scale = 0.5
    Poutre.collider = 'static'
    //Poutre.debug ='true'

    Poutre2 = new Sprite()
    Poutre2.x = 286
    Poutre2.y = 427
    Poutre2.w = 120
    Poutre2.h = 350
    Poutre2.img = 'img/poutreRouille.png'
    Poutre2.scale = 0.5
    Poutre2.collider = 'static'
    //Poutre2.debug ='true'

    Poutre3 = new Sprite()
    Poutre3.x = 30
    Poutre3.y = 280
    Poutre3.w = 120
    Poutre3.h = 360
    Poutre3.img = 'img/poutreRouille.png'
    Poutre3.scale = 0.5
    Poutre3.scale.y = 0.5
    Poutre3.rotation = 90
    Poutre3.collider = 'static'
    //Poutre3.debug ='true'

    Danger = new Sprite()
    Danger.img = 'img/tile_0042.png'
    Danger.x = 440
    Danger.y = 160
    Danger.w = 15
    Danger.h = 15
    Danger.scale = 3
    Danger.collider = 'static'
    Danger.debug ='true'

    Coffre = new Sprite()
    Coffre.img = 'img/tile_0060.png'
    Coffre.x = 22
    Coffre.y = 230
    Coffre.w = 15
    Coffre.h = 15
    Coffre.scale = 2.5
    Coffre.collider = 'static'

    Player = new Sprite()

    echelle = new Sprite()
    echelle.debug = 'true'
    echelle.x = 1100
    echelle.y = 360
    echelle.w = 50
    echelle.speed = 2
    echelle.img = 'img/tile_0090.png'
    echelle.img.scale = 3.5
    echelle.collider = 'kinematic'
    

    echelle2 = new Sprite()
    echelle2.debug = 'true'
    echelle2.x = 1040
    echelle2.w = 50
    echelle2.rotation = 180
    echelle2.img = 'img/tile_0090.png'
    echelle2.img.scale = 3.5
    echelle2.collider = 'kinematic'

    
    

}


function draw(){ 
    background('white')

    echelle.y += echelle.speed
    if (echelle.y > height || echelle.y < 360) {
    echelle.speed *= -1;
  }



    if (kb.pressing('left')) Player.vel.x = -3;
    else if (kb.pressing('right')) Player.vel.x = 3;
    else Player.vel.x = 0;
    if (kb.pressing('space') && Player.vel.y <= 0.2) {
    Player.vel.y = -3; 
}
}

