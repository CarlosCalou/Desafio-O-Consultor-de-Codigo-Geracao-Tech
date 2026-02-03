var lista = [
 {nome:"Arroz",preco:20,qt:2},
 {nome:"Feijao",preco:8,qt:3},
 {nome:"Macarrao",preco:5,qt:1}
]

function total(){
 var t = 0
 for(var i=0;i<lista.length;i++){
  t = lista[i].preco * lista[i].qt
 }
 return t
}

function add(n,p,q){
 lista.push({nome:n,preco:p,qt:q})
}

console.log("Total da compra:", total())