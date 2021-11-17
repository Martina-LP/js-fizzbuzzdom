


// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

const boxContainer = document.querySelector('.container');

for( let i = 1; i <= 100; i++ ) {
  console.log(i);

  let fizzBuzz;

  if( i % 3 === 0 && i % 5 === 0 ) {
    fizzBuzz = 'fizzbuzz';
    console.log(fizzBuzz);

  } else if( i % 3 === 0 ) {
    fizzBuzz = 'fizz';
    console.log(fizzBuzz);

  } else if( i % 5 === 0 ) {
    fizzBuzz = 'buzz';
    console.log(fizzBuzz);

  } else {
    fizzBuzz = i;
    console.log(i);

  };

  const newBox = `
  <div class="box ${fizzBuzz}">${fizzBuzz}</div>
  `;

  boxContainer.innerHTML += newBox;
};