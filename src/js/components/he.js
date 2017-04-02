function getPINs(observed) {
  // TODO: This is your job, detective!
  return observed.split('').map(function(el){
    let remainder = el%3;
    switch(remainder){
      case 0:        
        return [+el, +el-1, +el+3, +el - 3].filter(function(a){
          console.log(a);
          return a > 0 && a < 10})
      break;
      case 1:
        return [+el, +el+1, +el+3, +el - 3].filter(function(a){
          console.log(a);
          return a > 0 && a < 10})
      break;
      case 2:
        if(el == 8){
          return [5,7,8,9,0];
        }
        return [+el, +el+1, +el-1, +el+3, +el - 3].filter(function(a){
          console.log(a);
          return a > 0 && a < 10})
      break;
      default:
      
      break;
    }
  });
}

function joinNumbers(arrs){
  return arrs.reduce(function(prev, next){
    var newNums = [];
    for(var i = 0; i <next.length; i++){
      var a = next[i];
      prev.map(function(el){
        newNums.push(''+ el + a);
      })
    };
    console.log(newNums)

    return !prev.length ? next : newNums;
  },[]);
}