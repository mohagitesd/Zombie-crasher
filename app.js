let player;

function loadPlayerAnimations() {
  const idle = loadAni("img/player_idle.png");
  idle.scale = 0.8;

  const walk = loadAni("img/player_walk1.png", "img/player_walk2.png");
  walk.scale = 0.8;
  walk.frameDelay = 15;

  const jump = loadAni("img/player_jump.png");
  jump.scale = 0.8;

  player.addAni("idle", idle);
  player.addAni("walk", walk);
  player.addAni("jump", jump);

  player.changeAni("idle");
}
function setup() {
  new Canvas(1200, 720);
  world.gravity.y = 10;
  deadZone = new Sprite();
  deadZone.width = 1200;
  deadZone.height = 10;
  deadZone.y = 620;
  deadZone.image = "img/deadZone.png";
  deadZone.img.scale.x = 1.9;
  deadZone.collider = "none";
  //deadZone.debug = 'true'

  arrow = new Sprite();
  arrow.img = "img/signpost.png";
  arrow.rotation = -90;
  arrow.scale = 1.5;
  arrow.y = 30;
  arrow.x = 200;
  arrow.collider = "none";

  pipe = new Sprite();
  pipe.x = 200;
  pipe.y = 120;
  pipe.w = 1300;
  pipe.h = 40;
  pipe.image = "img/tuyaux.png";
  pipe.img.scale.y = 0.5;
  pipe.collider = "static";
  //pipe.debug ='true'

  pipeTurn = new Sprite();
  pipeTurn.image = "img/tile_0093.png";
  pipeTurn.rotation = 270;
  pipeTurn.x = 879;
  pipeTurn.y = 120;
  pipeTurn.w = 12;
  pipeTurn.h = 13;
  pipeTurn.scale = 3.27;
  pipeTurn.collider = "static";
  //pipeTurn.debug ='true'

  pipeV = new Sprite();
  pipeV.x = 879;
  pipeV.y = 280;
  pipeV.h = 40;
  pipeV.w = 1315;
  pipeV.image = "img/tuyaux.png";
  pipeV.rotation = 270;
  pipeV.scale.x = 0.2;
  pipeV.collider = "static";
  //pipeV.debug ='true'

  pipeHole = new Sprite();
  pipeHole.x = 879;
  pipeHole.y = 435;
  pipeHole.img = "img/pipeHole.png";
  pipeHole.mirror.x = "true";
  pipeHole.img.scale = 3.5;
  pipeHole.collider = "none";

  Sol = new Sprite();
  Sol.x = 600;
  Sol.y = 550;
  Sol.width = 1075;
  Sol.img = "img/sol.png";
  Sol.scale = 0.8;
  Sol.collider = "static";
  //Sol.debug ='true'

  beam = new Sprite();
  beam.x = 440;
  beam.y = 275;
  beam.w = 110;
  beam.h = 345;
  beam.img = "img/beam.png";
  beam.scale = 0.5;
  beam.collider = "static";
  //beam.debug ='true'

  beam2 = new Sprite();
  beam2.x = 286;
  beam2.y = 427;
  beam2.w = 120;
  beam2.h = 350;
  beam2.img = "img/beam.png";
  beam2.scale = 0.5;
  beam2.collider = "static";
  //beam2.debug ='true'

  beam3 = new Sprite();
  beam3.x = 30;
  beam3.y = 280;
  beam3.w = 120;
  beam3.h = 360;
  beam3.img = "img/beam.png";
  beam3.scale = 0.5;
  beam3.scale.y = 0.5;
  beam3.rotation = 90;
  beam3.collider = "static";
  //beam3.debug ='true'

  danger = new Sprite();
  danger.img = "img/tile_0042.png";
  danger.x = 440;
  danger.y = 160;
  danger.w = 15;
  danger.h = 15;
  danger.scale = 3;
  danger.collider = "static";
  danger.debug = "true";

  coffre = new Sprite();
  coffre.img = "img/tile_0060.png";
  coffre.x = 22;
  coffre.y = 230;
  coffre.w = 15;
  coffre.h = 15;
  coffre.scale = 2.5;
  coffre.collider = "static";

  player = new Sprite();
  player.x = 400;
  player.y = 400;
  player.w = 50;
  player.h = 80;
  player.debug = "true";

  loadPlayerAnimations();

  plateform = new Sprite();
  plateform.debug = "true";
  plateform.x = 1100;
  plateform.y = 360;
  plateform.w = 50;
  // plateform.vel.y = -1
  plateform.speed = 1;
  plateform.direction = -90;

  plateform.img = "img/tile_0090.png";
  plateform.img.scale = 3.5;
  plateform.collider = "kinematic";

  plateform2 = new Sprite();
  plateform2.debug = "true";
  plateform2.x = 1040;
  plateform2.w = 50;
  plateform2.y = 360;
  plateform2.speed = 1;
  plateform2.direction = -90;
  plateform2.rotation = 180;
  plateform2.img = "img/tile_0090.png";
  plateform2.img.scale = 3.5;
  plateform2.collider = "kinematic";
}

function draw() {
  background("white");
  //deplacer la plateforme de haut en bas : en cours...
  //   if (plateform.y < 100) {
  // plateform.direction = 90
  // }
  //   if (plateform.y > 300) {
  // plateform.direction = -90
  // }

  if (plateform.y < 150 || plateform.y > 450) {
    plateform.direction *= -1;
  }
  if (plateform2.y < 150 || plateform2.y > 450) {
    plateform2.direction *= -1;
  }

  /* if (kb.pressing("left")) player.vel.x = -3;
  else if (kb.pressing("right")) player.vel.x = 3;
  else player.vel.x = 0;
  if (kb.pressing("space") && player.vel.y <= 0.2) {
    player.vel.y = -8;
  }*/
  player.rotation = 0;
  if (kb.pressing("left")) {
    player.vel.x = -7;
    player.changeAni("walk");
    player.mirror.x = true;
  } else if (kb.pressing("right")) {
    player.vel.x = 7;
    player.changeAni("walk");
    player.mirror.x = false;
  }

  if (kb.pressing("space")) {
    player.vel.y = -5;
    player.changeAni("jump");
    player.mirror.x = false;
  }

  if (!kb.pressing("left") && !kb.pressing("right") && !kb.pressing("space")) {
    player.changeAni("idle");
  }
  if (kb.pressing("left") && kb.pressing("space")) {
    player.changeAni("jump");
    player.mirror.x = true;
  }

  if (player.x < 0 && player.y < 120) {
    message = new Sprite();
    message.textSize = 40;
    message.text = "Vous avez bien fuit";
  }
}
