import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState('+');

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(n1 + n2);
        break;
      case '-':
        setResult(n1 - n2);
        break;
      case '*':
        setResult(n1 * n2);
        break;
      case '/':
        if (n2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-20">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Calculator</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <input
            type="number"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
            placeholder="Enter number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
            placeholder="Enter number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
        </div>
        <div className="mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
            onClick={calculate}
          >
            Calculate
          </button>
        </div>
        <div className="text-2xl font-semibold text-center">
          Result: {result}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
