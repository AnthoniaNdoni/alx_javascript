#!/usr/bin/node

module.exports = Square
const Rectangle = require("./1-rectangle")

class Square extends Rectangle{
    constructor(size) {
        super(size, size);
    }
}