// exampleComponent.js
import React, { useContext } from 'react';
import { store } from './Store';

const ExampleComponent = () => {
  const globalState = useContext(store);
  console.log(globalState); // this will return { color: red }
};