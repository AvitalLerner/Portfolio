let counter = JSON.parse(localStorage.getItem('players'))?.length || 0;

export const incrementCounter = () => ++counter;
// export const decrementCounter = () => --counter;
export const getCounter = () => counter;
export const setCounterZero = () => counter = 0;
