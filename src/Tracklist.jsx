import React from 'react';
import { createRoot } from 'react-dom';



const tracks = document.getElementById('Track-List');
const root = createRoot(tracks);

const myList = (
    <ul>
      <li>This</li>
      <li>Is</li>
      <li>Just</li>
      <li>A</li>
      <li>Test</li>
      
    </ul>
  );

  root.render(myList);
