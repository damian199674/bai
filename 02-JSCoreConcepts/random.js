/*const random_tab = () => {
    const tab = [];
    for(let i=0; i<10; i++){
        tab.push(5 + Math.floor((21 - 5) * Math.random()));
    }
    return tab;
}; 
console.log(random_tab());*/

let random_number = () => {
   return 5 + Math.floor((21 - 5) * Math.random());
}
let fill_table = () =>{
    let tab = [];
    for(let i=0; i<10; i++){
        tab.push(random_number());
    }
    console.log(tab)
}
fill_table()

