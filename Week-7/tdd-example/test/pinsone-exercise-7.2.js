/*
============================================
; Title: Pinson-Exercise 7.2.js
; Author: Richard Krasso
; Date: February 18th 2021
; Modified By: James Pinson
; Description: This assignment teaches us how to implement TDD.     
;============================================
*/
var assert = require("assert");

//This is our unit test. 
describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});