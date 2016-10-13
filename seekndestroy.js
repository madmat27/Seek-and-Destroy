function destroyer(arr) {
  // Remove all the values
  
  var args = Array.prototype.slice.call(arguments);
  var temparr = [];
  var i;
  var j;
  
  for (i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        temparr = args.splice(i,1);
        }
    }
    
  for (i=0; i < arr.length; i++) {
    for (j= 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        temparr = arr.splice(i,1);
        }
      }
    }
    
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);