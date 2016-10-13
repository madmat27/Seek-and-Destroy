
// Working but with no .filter method: 
function destroyer(arr) {
  // Remove all the values
  
  var args = Array.prototype.slice.call(arguments);
  var i;
  var j;
  
  for (i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        args.splice(i,1);
        }
    }
    
  for (j=0; j < args.length; j++) {
    for (i= 0; i < arr.length; i++) {
      if (arr[i] === args[j] && i !== 0) {
        arr.splice(i,1);
        i--;
        }
        else if (arr[i] === args[j] && i === 0) {
          arr.splice(i,1);
        }
      }
    }
    
  return arr;
}

destroyer([5,6], 6, 5);