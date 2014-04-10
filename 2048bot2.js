
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
  else if (stackTopRight(Math.floor(2 * Math.random()))) {}
  else if (stackTopRight(3)) {}
  else if (stackTopRight(2)) {}
}, 250);

