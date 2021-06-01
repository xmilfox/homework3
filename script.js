


//  завдання 1

   let  result = 1;
let  arr = [ 2,3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	result = result * arr[i];
}
alert(result);

// завдання 2


for (let i = 0; i<15;i++){
    if (i%2==0){
        alert(i+ ' is even')
    }else {
        alert(i+ ' is odd')
    }
}


 
 
 



// завдання 3

function raiseToDegree(){

 let a = prompt('Введіть число');
 
 let b = prompt('Введіть число');

 let c = a**b;
 
return c;
}

alert(raiseToDegree());


// завдання 4 

let mas = [12,14,4,-4,0.2];
function findMin(arr){
    let min = arr[0];
    for (let i = 0; i<arr.length;i++){
        if (min <arr[i]){
            min = min
        }
        else {
            min = arr[i]
        }
    }
return min;
}
console.log(findMin(mas));


// завдання 5
let str = 'i love java script';
    function  string(){
let words = str.split(' ');

for (let i = 0; i < words.length; i++) {
	
	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
let result = words.join(' ');

alert(result)
    }
  
string();

// завдання 6
function randArray(k){
    let arr = [];
    let rand;
    for (i=0;i<k;i++){
        rand = Math.random()*501;
        rand=Math.floor(rand);
        arr.push(rand);
    }
  return arr;
}
alert(randArray(5));

//  завдання 7
let mas = [1,2,3,4];
function lastElem(arr,x){
    for(i = 1 ;i<=k;i++){
        alert(arr[arr.length - i ]);
    }
  


}
lastElem(mas,2);