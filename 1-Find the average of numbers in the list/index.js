export const func = (list) => {
    let sum = 0;
    let average = 0;
  
    if (list.length == 0) {
      return 0;
    } else {
      for (let i = 0; i < list.length; i++) {
        sum += list[i];
      }
  
      return (average = sum / list.length);
    }
  };
  console.log(func([1,2,3,4,5]));
  