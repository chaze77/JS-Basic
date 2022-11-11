export const func = (list) => {
    if (list.length == 0) {
      return 0;
    } else {
      let maximum = list[0];
      for (let value of list) {
        if (value > maximum) {
          maximum = value;
        }
        
      }
      return maximum;
    }
  };
  
  console.log(func([8, 7, 5, 4, 6, 9]));
  