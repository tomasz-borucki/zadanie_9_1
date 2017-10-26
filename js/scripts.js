var triangle1Area = getTriangleArea(9, 3);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(14, 7);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(2, 15);
console.log(triangle3Area);

function getTriangleArea(a, h) {
    if (a <= 0) {
      return 'incorrect data';
    } else if (h <= 0) {
      return 'incorrect data';
    } else {
      return a*h/2;
    }
  }
  console.log(getTriangleArea(10, 6));
  