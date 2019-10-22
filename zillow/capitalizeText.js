const capitalizeText = str => {
    if (str === null || str.length === 0) {
        return str;
    }
    let array = str.split(' ');
    let newStr = '';
    for (let i = 0; i < array.length; i++) {
        let subStr = array[i].charAt(0).toUpperCase() + array[i].slice(1) + ' ';
        newStr += subStr;
    }

    return newStr.trim();

}



console.log(capitalizeText(' this is a test '))
console.log(capitalizeText('ivan , fff'))