function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a.charCodeAt(i) > a.charCodeAt(i+1) ) {
              console.log('in here: ' + a[i] );
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log('bubsort: ' + a);
}

function sort(str) {
  var comparisons = 0,
      swaps = 0,
      splitLwCase,
      swapping;
  
   function fullSort(s){
    var sortMe = s.split('');
     
    for (var j = 0; j< s.length-1; j++) {
      for (var i = 0; i < s.length - 1; i++) {
          comparisons++;       
          if (sortMe[i].charCodeAt(0) > sortMe[i+1].charCodeAt(0) ){
            swapping = sortMe[i + 1]; 
            sortMe[i + 1] = sortMe[i];
            sortMe[i] = swapping;
            swaps++;
          }   
        }
     }
     return sortMe.join('');
   }
  console.log('original : '+ str);
  splitLwCase = str.toLowerCase();
  console.log('lowercased: ' + splitLwCase ); 
  console.log('After fullsort : ' + fullSort(splitLwCase) );
}
sort("zxyB");