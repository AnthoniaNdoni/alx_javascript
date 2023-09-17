console.log('Start of the execution quene');

//Use setTimeout to excuete this code block with a delay of 0
setTimeout(() => {
    console.log('Final code block to be excueted with setTimeout (with delay of 0)');
}, 0);

// loop that iterate 100 times
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("End of the loop printing");