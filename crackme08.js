  
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '0420'

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('') // 0420
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)