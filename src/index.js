export const fizzBuzz = (value) => {
    if (value % 15 == 0) {
        return "FIZZBUZZ"
    }
    if (value % 3 == 0) {
        return "FIZZ"
    }
    if (value % 5 == 0) {
        return "BUZZ"
    }
    return value.toString();
}


var romans = [
    {num: 1, roman: "I"},
    {num: 4,roman: "IV"},
    {num: 5,roman: "V"},
    {num: 9,roman: "IX"},
    {num: 10,roman: "X"},
    {num: 40,roman: "XL"},
    {num: 50,roman: "L"},
];

export const getRomanNumber = (value) => {
    var res = ''
    var romanNumber = romans.reverse().find(item => {
        while(item.num <= value){
            res += item.roman;
            console.log("aaaaa"+ res)
            value -= item.num;
        }
    })
    return res;
}

