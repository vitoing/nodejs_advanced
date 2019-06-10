// let pro1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve("Success!"); // È andato tutto perfettamente!
//     }, 250);
// });

// pro1.then((result) => {
//     console.log("pro1_i1", result);
// });

// const pro11 = pro1.then((result) => {
//     console.log("pro1_c1", result);
//     return result;
// });

// pro1.then((result) => {
//     console.log("pro1_i2", result);
// });

// pro1.then((result) => {
//     console.log("pro1_i3", result);
// });


// const pro12 = pro11.then((result) => {
//     console.log("pro12", result);
//     return result;
// });

// const pro13 = pro12.then((result) => {
//     console.log("pro13", result);
//     return result;
// });

let pro2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject("Failed!"); // È andato tutto perfettamente!
    }, 250);
});

// pro2.catch((result) => {
//     console.log("pro21", result);
// });

// pro2.catch((result) => {
//     console.log("pro22", result);
// });

// pro2.catch((result) => {
//     console.log("pro23", result);
// });


const pro21 = pro2.catch((result) => {
    console.log("pro21", result);
    return result;
});

const pro22 = pro21.then((result) => {
    console.log("pro22", result);
});

const pro23 = pro22.then((result) => {
    console.log("pro23", result);
});

// setTimeout(function () {
//     pro1.then((result) => {
//         console.log("pro1", result);
//     });
// }, 2000);
