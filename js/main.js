// var x=prompt('enter your name')
// console.log(x);
// document.getElementById('test').innerHTML='hi'
// var name='5'
// var x=5
// var y=5.2
// var isAdmin=true
// var z;
// var n=null
// console.log(typeof(n));
// var x=5
// var y=10
// var opr=prompt('enter opr')

// switch (opr) {
//     case '+':
//         console.log(x+y);
//         break;
//     case '-':
//         console.log(x-y);
//         break;
//     case '*':
//         console.log(x*y);
//         break;
//     case '/':
//         console.log(x/y);
//         break;


//     default:
//         console.log('end');
//         break;
// }

// for(var i=0; i<5 ; i++){
//    console.log(i);
// }
// var years=document.getElementById('years')
// for(var i=1980 ; i<=2022 ; i++){
//     console.log(i);
//     years.innerHTML+='<option >'+i+'</option>'
// }
// var i=2
// while(i<5){

// console.log(i);
// i++
    
// }
               
// var numbers=[5,7,8,4 ,5]


// numbers.indexOf(4)
// console.log(
//     numbers.indexOf(4));

// var person={
//     'name':'amira',
//     gender:'female',
//     x:function(){
//         console.log('welcome');
//     }

// }
// console.log(person.name
//     );

// function checkNum(arr){
//     newArr=[]
//     for(var i=0 ; i<arr.length ; i++){
       
      
//         for(var j=0 ; j<arr[i].length ; j++){
//             if(arr[i][j]>='0' && arr[i][j]<='9'){
//                 // console.log(arr[i]);
//                 newArr.push(arr[i])
//                 console.log(newArr);
//                 break;
//             }
    

//         }
//     }

// }
// checkNum(["abc", "ab10c", "a10bc", "bcd" , 7])

// function sumNums(x){

// console.log(arguments)
//     if(arguments.length==2){
//        console.log(arguments[0]+arguments[1]);
//     }
//     else{
//         return function(y){

//             console.log(y+x);
//         }
        
//     }

    
   

// }
// sumNums(2,3)
// sumNums(2)(3)


// function checkSeven(arr){
//     var x=arr.join().includes('7')
//     console.log(x);
//     if(arr.join().includes('7')){
//         console.log('boom');
//     }
//     else{
//         console.log('there is no 7');
//     }

// }
// checkSeven([1, 2, 3, 47, 5, 6])


// function checkNum(arr){
//     for(var i=0 ; i< arr.length ; i++){
//         console.log(arr[i]);
//     }

// }
// checkNum(["abc", "abc10"]) 


// var years=document.getElementById('years')
// for(var i=1990 ; i <=2023 ; i++){
//     years.innerHTML+=`<option>${i}</option>`
// }

// alert('welcome')
// console.log('welcome')


// var name='a41li'
// var password=123
// if(name=='amira' && password==1223){
//     console.log('welcome');
// }
// else if (name=='ali'){
//     console.log('welcome ali');
// }
// else if (name=='omar'){
//     console.log('welcome ali');
// }
// else if (name=='mohamed'){
//     console.log('welcome ali');
// }
// else{

//     console.log('go to sign up');
// }

// var num=-5
// switch (true) {
//     case true:
//         console.log('positive');
        
//         break;
//     case false:
//        switch(num==0){
//         case true :
//             console.log('0');
        
//         break;

//         case false :
//             console.log('neg');
        
//         break;


//        }


   
        
// }

// var x=10
// console.log(x++);
// console.log(x);


//  var years=document.getElementById('years')
// for(var i = 1990 ; i<=2023 ; i++){
//    years.innerHTML+='<option>'+ i+'</option>'
// }
// var i=1990
// while (i<=2023) {

//     years.innerHTML+='<option>'+ i+'</option>'
//     i++
// }
// var i=1990
// do{
    
   
//     years.innerHTML+='<option>'+ i+'</option>'
//     ++i
    


// function sum(){
//     return 5
// }



// function num(y){
//     console.log(y*10);
// }
// num(5)


// var student={
//     name : 'ahmed',
//     age:20,
//     id:[44,7,8],
//     welcome:function(x){
//        console.log(x*65)
//     }


// }
// console.log(student.welcome(x));



// function checknum(arr){
//     var newArr=[]
//     for(var i=0 ; i<arr.length ; i++){
//         // console.log(arr[i]);
//         for(var j=0 ;j< arr[i].length; j++ ){
//             // console.log(arr[i][j]);
//             if(arr[i][j] >=0 &&arr[i][j]<=9 ){
//                 newArr.push(arr[i])
//                 console.log(newArr);
//                 break;

//             }
//         }
     
        
//        }
//     }


// checknum(["a", ,"a", "b", "b" ,'jj55j' , 'jhj'])

// function sumNums(x){

//     if (arguments.length==2){
//        console.log(arguments[0] + arguments[1]);
//     }
//     else{
//         return function(y){
//             console.log(y+x);
    
//         }

//     }
    

   

// }
// sumNums(2,3)
// sumNums(2)(3)

// function Boom(arr){
//     // console.log(arr.join('').includes('7'));
//     arr.join('').includes('7')?console.log('boom'):console.log('no 7');



// }
// Boom([2, 55, 60, 876])

// $('.spinner').click=function(){
//     $('.spinner').toggle(1000)

// }


var days=document.getElementById('days')
var hour=document.getElementById('hour')
var min=document.getElementById('min')
var sec=document.getElementById('sec')
var countDate=new Date('may 23 ,2023 10:30:30').getTime()
var x=setInterval(function(){
    var now=new Date().getTime()
    var dis=countDate-now
    var daysElmnt = Math.floor(dis / (1000 * 60 * 60 * 24));
    var hoursElmnt = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesElmnt = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
    var secondsElmnt = Math.floor((dis % (1000 * 60)) / 1000);
    days.innerHTML=daysElmnt + 'D'
    hour.innerHTML=hoursElmnt + 'H'
    min.innerHTML=minutesElmnt + 'M'
    sec.innerHTML=secondsElmnt + 'S'
   
},1000)

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })













