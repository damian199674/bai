// boki trójkąta
const a = 3;
const b = 4;
const c = 5;
const h = 7;

let S = () => {
    const p = 0.5*(a+b+c);
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
};

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${S()}.` );