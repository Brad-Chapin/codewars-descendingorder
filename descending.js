function descend (n) {
  let digits = n.toString().split('');
  let sorted= digits.sort(function (a,b){
    return (b-a);
  })
  let newval = parseInt(sorted.join(''));
  return newval;
}


console.log(descend(443587387385));
