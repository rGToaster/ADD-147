const queue = '[{"id":"394","title":"Eat your veggies"},{"id":"378","title":"Every step counts"},{"id":"406","title":"Giving Back"}]';

// Enter code to destringify the `queue` variable here:
const queueArray = JSON.parse(queue);
console.log("Queue as array:", queueArray);

const item = '{"id":"406","title":"Giving Back"}';

// Enter code to destringify the `item` variable here:

const itemObj = JSON.parse(item);
console.log("Item as object:", itemObj);