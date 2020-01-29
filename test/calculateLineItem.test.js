// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { calcLineTotal } from '../common/utils.js';


const test = QUnit.test;

test('testing CalcLineTotal', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    let quantity = 2;
    let price = 6;
    const expected = 12;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineTotal(quantity, price);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);

});