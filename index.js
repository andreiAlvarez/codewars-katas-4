// Kata 1 

const add = n => Object.assign(i => add(i + n), { valueOf: () => n }); 

// Kata 2

function anagramDifference(str1, str2) {
  let count1 = Array(26).fill(0);
  let count2 = Array(26).fill(0);
  let i = 0;
  while (i < str1.length) {
    count1[str1[i].charCodeAt() - 97] += 1;
    i += 1;
  }
  i = 0;
  while (i < str2.length) {
    count2[str2[i].charCodeAt() - 97] += 1;
    i += 1;
  }
  let result = 0;
  for (let i = 0; i < 26; i++) {
    result += Math.abs(count1[i] - count2[i]);
  }
  return result;
}; 

// kata 3

function add(a,b){
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 2 + res;
    c = c > 1;
  }
  res = res.replace(/^0+/, '');
  return res || '0';
};

// kata 4

function guessGifts(wishlist, presents) {
const arr = []
  for (let i=0;i<wishlist.length;i++){
    for (let j=0;j<presents.length;j++){
      let gift = wishlist[i]
      if (gift.size===presents[j].size&&gift.clatters===presents[j].clatters&&gift.weight===presents[j].weight){
        arr.push(gift.name)
        break;
      }
    }
  }; 
  
  // solution 2 
  
  const guessGifts = (wishlist, presents) =>  
  wishlist.filter(e=> presents.some(x=> x.size == e.size && 
                                        x.clatters == e.clatters && 
                                        x.weight == e.weight))
          .map(e=> e.name);
