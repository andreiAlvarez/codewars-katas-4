// Kata 1 

const add = n => Object.assign(i => add(i + n), { valueOf: () => n }); 
