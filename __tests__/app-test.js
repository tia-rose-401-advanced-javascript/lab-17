'use strict';

const upper = require('../mod/read').upper;


describe('uppercase', () => {

  it('should return a string uppercased', () => {
    let str = 'this is just a test';
  
    str = upper(str);
    expect(str).toBe('THIS IS JUST A TEST');
  });
});