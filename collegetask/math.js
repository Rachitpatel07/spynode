// math.js
const MathFunctions = {
    addition: function(a, b) {
      return a + b;
    },
    subtraction: function(a, b) {
      return a - b;
    },
    multiplication: function(a, b) {
      return a * b;
    },
    division: function(a, b) {
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;
    }
  };
  
  module.exports = MathFunctions;
  