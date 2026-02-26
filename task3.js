function func(arr){
    return arr.sort((a, b) => a.score - b.score)[arr.length - 1].name
}
let res = func([{name: 'Тимур', score: 61231},
    {name: 'Вова', score: 421},
    {name: 'Сергей', score: 7313},
    {name: 'Олег', score: 13},
    {name: 'Волков', score: 52}])
console.log(res)
