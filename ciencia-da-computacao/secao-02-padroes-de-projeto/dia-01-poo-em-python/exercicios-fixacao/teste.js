 var rockets = [
   { country: 'Russia', launches: 32 },
   { country: 'Us', launches: 23 },
   { country: 'China', launches: 16 },
   { country: 'Europe(ESA)', launches: 7 },
   { country: 'India', launches: 4 },
   { country: 'Japan', launches: 3 }
 ];

 var total = rockets.reduce(function (prevVal, elem) {
  if (elem.launches > 15)
    return prevVal + elem.launches;
  else
    return prevVal;
 }, 0);

 console.log(total);