/*
============================================
; Title: Pinson-Exercise 7.3.js
; Author: Richard Krasso
; Date: February 18th 2021
; Modified By: James Pinson
; Description: This assignment teaches us how to use Mocha and Chai.    
;============================================
*/
var fruits = require("../Pinson-fruits");

var chai = require("chai");

var assert = chai.assert;

//This sets up what Chai expects the function to return. 
describe("fruits", function(){
    it("should return an array of fruits", function (){
        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));
    });
});