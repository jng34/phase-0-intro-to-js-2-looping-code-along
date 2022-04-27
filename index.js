// Code your solutions in this file
function writeCards(nameArr, event) {
    const msgArr = [];
    for (let i=0; i<nameArr.length; i++) {
        msgArr.push('Thank you, ' + nameArr[i] + ', for the wonderful ' + event + ' gift!');
    }
    return msgArr;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}   
//console.log(countDown(10));