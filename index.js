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
// kata 5
  
function spyOn (func) {
  let callCount = 0;
  const calledWith = [];
  const returnVals = [];
  function spy (...args) {
    const returnVal = func(...args);
    callCount++;
    calledWith.push(...args);
    returnVals.push(returnVal);
    return returnVal;
  }
  spy.callCount = function () {
    return callCount;
  };
  spy.wasCalledWith = function (val) {
    return calledWith.includes(val);
  };
  spy.returned = function (val) {
    return returnVals.includes(val);
  };
  return spy;
}; 
  
  // kata 6
  
  function simple_assembler(program) {
    const reg = {};
    const regOrValue = (n) => n.match(/[a-z]/) ? reg[n] : +n;
    const ops = {
        'mov': (a, b) => { reg[a] = regOrValue(b); return 1; },
        'inc': (a, b) => { reg[a]++; return 1; },
        'dec': (a, b) => { reg[a]--; return 1; },
        'jnz': (a, b) => { return regOrValue(a) != 0 ? +b : 1; }
    };
    let ip = 0;
    while (ip < program.length) {
        const [op, a, b] = program[ip].split(' ');
        ip += ops[op](a, b);
    }
    return reg;
};

  // kata 7 
  
  const firstNonRepeatingLetter = s =>  s[
      s
        .toLowerCase()
        .split("")
        .findIndex(
          letter =>
            s
              .toLowerCase()
              .split("")
              .filter(l => l === letter).length === 1
        )
    ] || "";

  // kata 8 
  
  function getStartTime(schedules, duration) {
  function toMinutes(s) {
    return s.split(':').reduce(function(h, m) {
      return parseInt(h) * 60 + parseInt(m);
    });
  }
  return schedules.reduce(function(p, n) {
    return p.concat(n);
  }, [['00:00', '09:00'], ['19:00', '24:00']]).sort().reduce(function(p, n) {
    if (!p.start && toMinutes(p.last) + duration <= toMinutes(n[0])) {
      p.start = p.last;
    }
    p.last = p.last < n[1] ? n[1] : p.last;
    return p;
  }, {last: '00:00', start: null}).start;
}; 
  
  // kata 9
  
  const beeramid = (bonus, price, lvl = 1) =>
  bonus - lvl ** 2 * price < 0 ? --lvl : beeramid(bonus - lvl ** 2 * price, price, ++lvl);
  
  // solution 2
  
  var beeramid = function(bonus, price, level=1) {
  if (level**2*price > bonus)
    return level-1;
  return beeramid(bonus-level**2*price, price, level+1)
}

  // kata 10
  
  function serpentineTree(node)
{ 
  const left = {}
  dfs(node,left)
  return Object.values(left).reduce((arr,val,i)=>arr.concat(i%2?val.reverse():val),[])
};

function dfs(node,obj,d=0){
  if (!node) return;
  if (!obj[d]) obj[d]=[]
  obj[d].push(node.data)
  dfs(node.left,obj,d+1)
  dfs(node.right,obj,d+1)
}; 

  // kata 11
  
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
};
  
  // kata 12
  
  const whoIsNext = (names, r) =>
  r > names.length ? whoIsNext(names, Math.floor((r - names.length + 1) / 2)) : names[--r];

  // kata 13 
  
  Math.round = function(number) {
  return number - parseInt(number) >= 0.5
    ? parseInt(number) + 1
    : parseInt(number);
};

Math.ceil = function(number) {
  return parseInt(number) === number ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};

  
  // kata 14 
  
  function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function(val) {
    return val < 10 ? "0" + val : val;
  };

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
};

  // kata 15
  
  let maxSequence = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = 1; j <= arr.length; j++) {
      if (arr.slice(i, j).reduce((a, b) => a + b, 0) > sum) {
        sum = arr.slice(i, j).reduce((a, b) => a + b, 0);
      }
    }
  return sum > 0 ? sum : 0;
};

  // kata 16 
  
  function parseMolecule(formula) {
  const nums = {};
  (function reduce(molecule, mult) {
    molecule.match(/[A-Z][a-z]?\d*|\([^\)]+\)\d*|\[[^\]]+\]\d*|{[^}]+}\d*/g).forEach(function(val) {
      if (val.match(/\[|\]|\(|\)|{|}/g)) {
        reduce(val.replace(/^(\[|\()|((\]|\)|{|})\d*)$/g, ''), mult*val.match(/\d*$/g)[0]||1);
      } else {
        const element = val.replace(/\d/g, '');
        nums[element] = (nums[element] || 0) + (val.replace(/[A-Za-z]/g, '')||1) * mult;
      }
    });
  }(formula, 1));
  return nums;
}; 

  
  // kata 17 
  
  const pickPeaks = arr =>
  (pos => ({pos, peaks: pos.map(val => arr[val])}))
  (arr.slice(1).map((val, idx) => Math.sign(val - arr[idx]) * ++idx).filter(val => val).filter((val, idx, arr) => val > 0 && arr[++idx] < 0));
