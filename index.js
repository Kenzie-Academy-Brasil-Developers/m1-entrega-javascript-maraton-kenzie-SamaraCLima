let competidores = ['Rafael', 'Manuel', 'Daniel']
function positions(para) {
    let ordem = para.indexOf('Daniel')
      if (ordem != 0) {
        para.splice(ordem, 1)
        para.splice(ordem-1, 0, 'Daniel')
    }
      else {
        return 'Daniel é o vencedor'
    }
  return 'Este é o pódio: ' + para
}
console.log(positions(competidores));