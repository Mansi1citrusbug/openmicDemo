    import React from 'react'
import { createStore } from 'redux';
import RootReducer from '../Reducers/Rootreducer';
const Store=createStore(RootReducer);

export default Store;
