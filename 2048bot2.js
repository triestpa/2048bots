
a = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
b = a.addRandomTile.bind(a);
moved = false;
a.addRandomTile = function() { moved = true; b(); };
movesfailed = 0;

function checkMove() {
   if (moved == false) {
    movesfailed++;
  }
  else {
    movesfailed = 0;
  }
}

function stackTopRight(move) {
  a.move(move);
  return moved;
}

setInterval(function() {
  moved = false;  

   if (a.isGameTerminated()) {
    window.setTimeout(function() {
      a.restart();
    }
      ,2000)
  }

  randmove = Math.floor(2 * Math.random());
  if (randmove == 0)
    othermove = 1;
  else
    othermove = 0;

  if (stackTopRight(randmove)) {}
  else if (stackTopRight(othermove)) {}
  else if (stackTopRight(3)) {}
  else if (stackTopRight(2)) {}
}, 250);

