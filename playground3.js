function filtPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 27, 4, 9, 10, 77, 50];

console.log(filtPares(meuArray));