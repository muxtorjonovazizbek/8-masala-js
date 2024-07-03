// 1. array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring

// let biggerThanTwo = []
// let arr = [1,2,3,4,5,6,7]
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 2) {
//        biggerThanTwo.push(arr[i]) 
//     }
// }
// console.log(biggerThanTwo);


// 2. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar 
// yigindisini toping va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping

// let num = +prompt("Raqam kiriting")

// let totalJuft = 0
// let totalToq = 0
// let total_juft_va_toq = 0
// let difference = 0

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(`%c${arr[i]} Juft Son`, 'color: red');
//         totalJuft += arr[i]
//     }
//     else {
//         console.log(`%c${arr[i]} Toq Son`, 'color: green');
//         totalToq += arr[i]
//     }
// }

// total_juft_va_toq = totalJuft + totalToq
// difference = Math.abs(num - total_juft_va_toq)




// console.log(totalJuft, 'Juft sonlar yig\'idisi');
// console.log(totalToq, 'Toq sonlar yig\'idisi');
// console.log(total_juft_va_toq, "Umumiy Juft va Toq sonlar yig'indisi");
// console.log(num,"User kiritgan son");
// console.log(difference, "Oradagi farq");


//  3. foydalanuvchi 2 ta son kiritadi va shu 2 ta son oralig’idagi juft sonlar 
//  ye’g’indisini chiqaruvchi algaritm tuzing faqat 1 son 2 son dan kichikligini tekshiring


// let firstNumber = +prompt("Birinchi sonni kiriting")
// let secondNumber = +prompt("Ikkinchi sonni kiriting")

// let totalJuft = 0

// if (firstNumber < secondNumber) {
//     for(let i = firstNumber; i <= secondNumber; i++) {
//         if (i % 2 == 0) {
//             totalJuft += i
//         }
//     }
// }else {
//     console.log("Birinchi Son Ikkinchi Sondan Kichik Bo'lishi Kerak!");
// }
// console.log(`${firstNumber} va ${secondNumber} orasidagi juf sonlar yigindisi`,totalJuft);


// 4. function argumentiga berilgan qiymatlar orasida faqat number 
// larni alohida array ga ko'chiring va return qiling


// let numbers = []

// function findNumber(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (typeof params[i] === "number") {
//             numbers.push(params[i])
//         }
        
//     }
// }
// findNumber(1,'salom',false,3,6,true,null,10)
// console.log(numbers);



// 5. argument sifatida berilgan object ni value 
// laridan tashkil topgan array ni qaytaradigan function yarating

    // let values = []

    // function getValue(...params) {
    //     for(let key in params[0]) {
    //         values.push(params[0][key])
    //     }
    // }
    // getValue({name:'Jack ', age:21, job:'Teacher'})
    // console.log(values);



//  6. argument sifatida berilgan object ni key 
// larinidan tashkil topgan array ni qaytaradigan function yarating


    // let keys = []

    // function getValue(...params) {
    //     for(let key in params[0]) {
    //         keys.push(key)
    //     }
    // }
    // getValue({name:'Jack ', age:21, job:'Teacher'})
    // console.log(keys);



// 7. [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4] shu arraydan 4 soni olib tashlansin

// let array = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];


// function removeNumber(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 4) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }


// let filteredArray = removeNumber(array);
// console.log(filteredArray);



// //  8. Ixtiyoriy object yaratilsin key va value lari 6 tadan kam bo'lmasin \
// //  1. value lar ro'yxati chiqarilsin 2. value larining yig'indisi topilsin

// let obj = {
//     name:"John", 
//     surname:"Allison",
//     age:23,
//     job:"Teacher",
//     weight:92,
//     height:186,
// }

// let total = 0

// for(let key in obj) {
//     if (typeof obj[key] === "number") {
//         total += obj[key]
        
//     }
//     console.log(obj[key]);  
    
// }

// console.log(`${total} Value lar yig'idisi`);