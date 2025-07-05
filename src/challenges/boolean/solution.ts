const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const minHeight = 130;

const currentHour = new Date().getHours();

const isParkOpened = currentHour > 9 && currentHour < 18;

if (!isParkOpened) {
  throw new Error('O parque está fechado!');
}

const isUserHasTicket = user.hasTicket

if (!isUserHasTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const hasPermission = user.height > minHeight;

if (!hasPermission) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')