function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    const square = a.map(n => n * n);
    const cube = b.map(n => n * n * n);
    const squareSum = square.reduce((x,y) => x + y,0);
    const cubeSum = cube.reduce((x,y) => x + y,0);
    if (squareSum > cubeSum) {
      return true;
      } 
    if (squareSum < cubeSum) {
        return false;
        }
  }