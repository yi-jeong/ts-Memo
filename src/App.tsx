import React from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";
import MemoList from './Components/MemoList';
import { MemoProvider } from './Context/MemoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`

const App = () => {
  return (
  <MemoProvider>
    <GlobalStyle/>
    <MemoList />
  </MemoProvider>
  );
}

export default App;