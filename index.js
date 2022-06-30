let competidores = ['Rafael', 'Manuel', 'Daniel']
function positions() {
    let ordem = competidores.indexOf('Daniel')
      if (ordem != 0) {
        competidores.splice(ordem, 1)
        competidores.splice(ordem-1, 0, 'Daniel')
    }
      else {
        return 'Daniel é o vencedor'
    }
  return 'Este é o pódio: ' + competidores
}
console.log(positions(competidores));