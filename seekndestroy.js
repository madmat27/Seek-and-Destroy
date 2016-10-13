function destroyer(arr) {
  // Remove all the values
  
  var args = Array.prototype.slice.call(arguments);
  var i;
  var j;
  
  for (i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        var temparr = args.splice(i,1);
        }
    }
    
  for (i=0; i < arr.length; i++) {
    for (j=
    }
  
  /*
  array.splice(i, 1);

If you want to remove every element with value number from the array:

for(var i = array.length - 1; i >= 0; i--) {
    if(array[i] === number) {
       array.splice(i, 1);
    }
}---

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);