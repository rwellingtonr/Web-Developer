// ES2020
// BigInt
// Optional Chaining Operator ?.
// Nullish Coalescing Operator ??

// ----------------------------------------------------
// typeof (something) - typeof 2 = 'number'
//should return the type
typeof 1n
// should return bigint
//bigint could solve the problem with the MAX_SAFE_INTEGER

let wellPlayer = {
    socer: {
        gols: 10,
        matches: 2,
        nickName: 'Well'
    }
}
// -----------------------------------------------------
// first it'll check up whether there's or there isn't this object
const matches = wellPlayer?.tenis?.matches
// if it doesn't exist, then it'll return Undefined
console.log(matches); 
// -------------------------------------------------------
//if there isn't the object it should return the Or conditional
let nickName = wellPlayer?.socer?.nickName ?? 'no nickname'
console.log(nickName);