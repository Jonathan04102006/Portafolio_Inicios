// short-circuit

// falso
// false
// 0
// ''
// null
// undefind
// NaN
let nombre = 'Chanchito feliz';
let usarname = nombre || 'Antonio';
console.log(usarname);

function fn1() {
    console.log('soyn fucion 1');
    return false;
}

function fn2() {
    console.log('soyn fucion 2');
    return true;
}

let x = fn1() && fn2();