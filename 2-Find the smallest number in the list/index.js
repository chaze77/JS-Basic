export const func = (list) => {
  let minimum = list[0];

  if (list.length==0) {
    return 0
  } else {
    for (let value of list) {
   
      if ( value < minimum) {
        minimum = value;
      }
      
    }
    return minimum

  }

  
};
console.log(func([12, 10, 11, 3, 1]));
