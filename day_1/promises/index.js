// const myPromise = new Promise((resolve, reject) => {
//     let marks=21;
//     if(marks>21){
//         resolve("You are passed");
//     }
//     else{
//         reject("You are failed");
//     }
// })
// const f1 = async () => {
//     try{
//         const message = await myPromise;
//         console.log(message);
//     } catch (error) {
//         console.log("some error occured",error);
//     }
// }
// const getData = async () => {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         return "some error occcured...";
//     }
// }
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("some error occured", error));


// const output = getData();
// console.log(output);


//f1();
// myPromise.then((message)=>console.log(message)).catch((error)=>console.log("some error occured",error));
// //console.log(myPromise);