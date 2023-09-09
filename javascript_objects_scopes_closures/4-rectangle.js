#!/usr/bin/node

//create a square of w and h

module.exports = class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || h === undefined || w === undefined) {
            return null;
        } else {
            this.width = w;
            this.height = h;
        }
    }

    // Print a rectangle of 'X' characters
    print(c = 'X') {
        for (let i = 0; i < this.height; i++) {
             console.log(c.repeat(this.width));
        };
    }
    //create a rotate function//
    rotate() {
        let h = this.height
        let w = this.width
        this.height = w;
        this.width = h;
    }
    // create a rotate function//
    double() {
        let h = this.height
        let w = this.width
        this.height = h * 2;
        this.width = w * 2;
    }
}       
