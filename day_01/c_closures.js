// closures 


function createCounter(){
    let count = 0;
    console.log(count);
    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        getCount: function(){

            return count;
        }

        
    }
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());
console.log(counter.count);
