// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { findById } from '../common/utils.js';
import floaties from '../data/product.js';


const test = QUnit.test;

test('test findById', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    let id = 'pool donut';
    const expected = 'pool donut';

    //Act 
    // Call the function you're testing and set the result to a const
    let result = findById(floaties, id);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.name, expected);

});
