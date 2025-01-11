'use strict';
const expect = require('chai').expect
const index = require('../dist/index.js')


describe('inRange function test', () => {
    it('should return 0', () => {
        const result = index.fitRange(0,-1,100)
        expect(result).to.equal(0)
    })
    it('should return 50', () => {
        const result = index.fitRange(0,50,100)
        expect(result).to.equal(50)
    })
    it('should return 100', () => {
        const result = index.fitRange(0,200,100)
        expect(result).to.equal(100)
    })
})