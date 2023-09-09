#!/usr/bin/node

const Sqr = require("./5-square");


module.exports = class Square extends Sqr{
    constructor(c){
        super(c);
    }
    charprint(c){
        if (c == null){
            super.print()
        }
        else{
            super.print(c)
        }
    }
    
}