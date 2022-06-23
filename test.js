let courses = [
   { name: "Courses in England", prices: [0, 100] }, 
   { name: "Courses in Germany", prices: [500, null] }, 
   { name: "Courses in Italy", prices: [100, 200] }, 
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] }, 
   { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [null, null];






function priceFilter (requiredRange, courses) {

   courses.sort(function(a, b) {
      var keyA = a.prices[0],
          keyB = b.prices[0];
          keyC = a.prices[1],
          keyD = b.prices[1];
     (keyC == null)&&(keyC = Infinity);
     (keyD == null)&&(keyD = Infinity);

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      if (keyC < keyD) return -1;
      if (keyC > keyD) return 1;
      return 0;
    });
   
   let rightBoard, leftBoard ;
   [leftBoard, rightBoard] = requiredRange;
   (leftBoard == null)&&(leftBoard = 0);
   (rightBoard == null)&&(rightBoard = Infinity);

   names = [];

   for (let price of courses ) {

      let priceOfCourse = (price.prices)
      let nameOfCourse = (price.name)

      let start, end
      [start, end] = priceOfCourse;
      (start == null)&&(start = 0);
      (end == null)&&(end = Infinity);
      (start >= leftBoard && end <= rightBoard)&&(names.push(nameOfCourse));
   }
   return names
}
console.log(priceFilter (requiredRange1,courses))
console.log(priceFilter (requiredRange2,courses))
console.log(priceFilter (requiredRange3,courses))
console.log(priceFilter (requiredRange4,courses))
