const title = "dr";
const name = "Mateusz";
const surname = 'Kubicki';
const street = 'Długa 15';
const city = 'Kraków';
const zip = '30-781';
const country = 'Poland'; 

// Rozwiązanie 1
console.log(title+" "+name+" "+surname+"\nul. "+street+"\n"+zip+" "+city+"\n"+country.toUpperCase());


// Rozwiązanie 2
console.log(`
${title} ${name} ${surname} 
ul. ${street} 
${zip} ${city}
${country.toUpperCase()}`);

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
