// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 1
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console “FizzBuzz”.


// Creo i numeri da 1 a 100
for( let i = 1; i <= 100; i++ ) {
  console.log(i);

  let fizzBuzz;
  
  // I multipli di 3 e di 5 corrispondono a FizzBuzz
  if( i % 3 === 0 && i % 5 === 0 ) {
    fizzBuzz = 'fizzbuzz';
    console.log(fizzBuzz);

  // I multipli di 3 corrispondono a Fizz
  } else if( i % 3 === 0 ) {
    fizzBuzz = 'fizz';
    console.log(fizzBuzz);

  // I multipli di 5 corrispondono a Buzz
  } else if( i % 5 === 0 ) {
    fizzBuzz = 'buzz';
    console.log(fizzBuzz);

  // I numeri che non corrispondono a multipli di 3 o di 5 saranno numeri comuni
  } else {
    fizzBuzz = i;
    console.log(i);

  };

};

