/* eslint-disable import/prefer-default-export */

const randomInteger = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { randomInteger };
