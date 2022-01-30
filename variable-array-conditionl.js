var bottolColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

// array 
var items = ['bottol', 'mug', 'paper', 'pen'];
items.indexOf('paper'); // 2
items.indexOf('logens'); // -1
items.push('envelope'); // add 'envelope' in the last
items.push('watch'); // again add 'watch' after 'envelope'
items.pop()  // remove last element, that is 'watch'

// conditionals 
if (items.length >= 4){
    console.log('You have too many stuff on your desk.')
}
else if (items.length == 4){
    console.log('You have too many stuff on your desk')
}
else {
    console.log('Wow! You have a clean desk')
}