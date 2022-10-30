
// Заданиt 3

for (let i = 0; i <= 10 ; i+=1) {
     console.log(i);
 }
 console.log('Задание 4');
// Задание 4
 for (let i = 0; i <= 10 ; i+=2) {
    console.log(i);
}
console.log('Задание 5');
// Задание 5
for (let i = 5; i <= 10 ; i++) {
    console.log(i);
}
console.log('Задание 6');
// Задание 6
for (let i = 10; i >= 0 ; i--) {
    console.log(i);
}
console.log('Задание 7');
// Задание 7
let m = 7;
let n = 12;

if (m > n){
    for (let i = n; i <= m ; i++)
    console.log(i);
}
else if(m < n){
    for (let i = m; i <= n ; i++)
    console.log(i);
}
else {
    console.log('числа равны');
}
console.log('Задание 8');
// Задание 8
    for (let i = m; i <= n ; i++){
    if (i % 2 === 0)
    console.log(i);
}
console.log('Задание 9');
// Задание 9
let count1 = 0;
let count2 = 0;

for (let i = m; i <= n ; i++){
    if (i % 2 === 0){
    count1 += i;
    
    }
    else if (i % 2 != 0){
    count2 += i;
      
    }
}
console.log(count1);
console.log(count2);  

console.log('Задание 10');
// Задание 10
let count3 = 0;

for (let i = 1; i <= n ; i++){
    count3 += i;
}
console.log(count3);