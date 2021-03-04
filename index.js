'use stric';
/**
 * VARIABLES
 */
const d = document,
  $previous = d.querySelector('[data-previous]'),
  $current = d.querySelector('[data-current]'),
  $ac = d.querySelector('[data-ac]'),
  $del = d.querySelector('[data-del]'),
  $operations = d.querySelectorAll('[data-operation]'),
  $numbers = d.querySelectorAll('[data-number]'),
  $result = d.querySelector('[data-result]');

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
});

/**
 * FUNCTIONS
 */
const ac = () => {
  console.log('click on AC ... ');
};

const del = () => {
  console.log('click on DEL ... ');
};

const operation = (ope) => {
  console.log(ope);
};

const number = (num) => {
  console.log(num);
};

const result = () => {
  console.log('click on RESULT ... ');
};

/**
 * Class
 */
class Calculator {
  constructor(previousElement, currentElement) {
    this.previousElement = previousElement;
    this.currentElement = currentElement;
  }
}
// Object
const calculator = new Calculator($previous, $current);
