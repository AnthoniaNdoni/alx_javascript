#!/usr/bin/node

//create a square of w and h

module.exports = class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || h === undefined || w === undefined) {
            throw new Error("Invalid width or height values.");
        } else {
            this.width = w;
            this.height = h;
        }
    }

    // Print a rectangle of 'X' characters
    print() {
        for (let i = 0; i < this.height; i++) {
             console.log('X'.repeat(this.width));
        };
    }
}       