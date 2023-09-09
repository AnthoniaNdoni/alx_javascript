#!/usr/bin/node

const Sqr = require("./5-square");


module.exports = class Square extends Sqr{
    constructor(c){
        super(c);
    }
    charPrint(c){
        if (c == null){
            super.print()
        }
        else{
            super.print(c)
        }
    }
    
}