let nomeDoArrayOriginal = ['1','2','3','4','5']
let nomeDoArrayOriginal1 = ['A','B','C','D','E']
let nomeDoArrayOriginal2 =  ['X','Y','Z','Q','R']

console.log('Original', nomeDoArrayOriginal)
let nomedoArrayCopia = nomeDoArrayOriginal.slice()
nomedoArrayCopia.push(50)
console.log('Copia',nomedoArrayCopia)

console.log('Original',nomeDoArrayOriginal1)
let nomeDoArrayCopia1 = nomeDoArrayOriginal1.slice()
nomeDoArrayCopia1.pop()
console.log('Cópia', nomeDoArrayCopia1)

console.log(nomeDoArrayOriginal2)
let nomedoArrayCopia2 = nomeDoArrayOriginal2.slice()
nomedoArrayCopia2.splice(2, 1)
console.log(nomedoArrayCopia2)
