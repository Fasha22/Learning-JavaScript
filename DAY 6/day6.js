const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
//   for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
//   }
  
  let i = 10;
  while (i < countries.length) {
    console.log(countries[i]) 
    i++;
  }

for(let i = 0; i <= 7; i++) {
    console.log('#'.repeat(i))
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
  }

  console.log('i    i^2    i^3');
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i**2}    ${i**3}`);
}
