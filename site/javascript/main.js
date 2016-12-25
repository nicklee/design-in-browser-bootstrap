import Point from './point';

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

const cp = new ColorPoint(25, 8, 'green');

console.log( 'hello', cp );


// test importing node modules

import leftPad from 'left-pad';

console.log( 'leftPad', leftPad('foo', 5) );
