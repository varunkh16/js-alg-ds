var MyStack = function() {
    this.length = 0;
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
    this.length++;
    if(this.length > 1) {
        for(let i=0;i<this.length-1;i++) {
            this.queue.push(this.queue[0]);
            this.queue.pop();
        }
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let element = null;
    if(this.length > 0) {
        element = this.queue.pop();
        this.length--;
    }
    return element;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let element = null;
    if(this.length > 0) {
        element = this.queue[this.length-1];
    }
    return element;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.length > 0 ? false : true;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(1);
obj.push(2);
console.log(obj.top());
console.log(obj.pop());
