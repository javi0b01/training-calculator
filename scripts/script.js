'use stric';
/**
 * VARIABLES
 */
const d = document,
  $previous = d.getElementById('previous'),
  $current = d.getElementById('current'),
  $ac = d.getElementById('ac'),
  $del = d.getElementById('del'),
  $operations = d.querySelectorAll('[data-operation]'),
  $numbers = d.querySelectorAll('[data-number]'),
  $result = d.getElementById('result');

/**
 * LISTENERS
 */
d.addEventListener('DOMContentLoaded', () => {
  $ac.addEventListener('click', ac);
  $del.addEventListener('click', del);
  $operations.forEach(($operation) => {
    $operation.addEventListener('click', () => {
      operation($operation.textContent);
    });
  });
  $numbers.forEach(($number) => {
    $number.addEventListener('click', () => {
      number($number.textContent);
    });
  });
  $result.addEventListener('click', result);
  $current.textContent = 0;
});

/**
 * FUNCTIONS
 */
const ac = () => {
  calculator.clear();
  calculator.updateDisplay();
};

const del = () => {
  calculator.deleteItem();
  calculator.updateDisplay();
};

const operation = (ope) => {
  calculator.handleOperation(ope);
  calculator.updateDisplay();
};

const number = (num) => {
  calculator.handleNumber(num);
  calculator.updateDisplay();
};

const result = () => {
  calculator.compute();
  calculator.updateDisplay();
};

/**
 * Class
 */
class Calculator {
  constructor(previousElement, currentElement) {
    this.previousUI = previousElement;
    this.currentUI = currentElement;
    this.clear();
  }

  clear() {
    this.previous = '';
    this.current = '';
    this.operation = undefined;
  }

  updateDisplay() {
    this.currentUI.textContent = this.current;
    if (this.operation !== undefined) {
      this.previousUI.textContent = `${this.previous} ${this.operation}`;
    } else {
      this.previousUI.textContent = '';
    }
  }

  handleNumber(number) {
    if (number === '.' && this.current.includes('.')) return;
    this.current = `${this.current}${number}`;
  }

  handleOperation(operation) {
    if (this.current === '') return;
    if (this.previous !== '') this.compute();
    this.previous = this.current;
    this.current = '';
    this.operation = operation;
  }

  compute() {
    let computation = undefined;
    const previous = parseFloat(this.previous);
    const current = parseFloat(this.current);
    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
      case '/':
        computation = previous / current;
        break;
      case 'x':
        computation = previous * current;
        break;
      case '+':
        computation = previous + current;
        break;
      case '-':
        computation = previous - current;
        break;
      default:
        break;
    }
    this.previous = '';
    this.current = computation.toString();
    this.operation = undefined;
  }

  deleteItem() {
    this.current = this.current.slice(0, -1);
  }
}

/**
 * INSTANCE
 */
const calculator = new Calculator($previous, $current);
