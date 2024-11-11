import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import MyCom from './components/mycom';
ReactDOM.render(
<React.StrictMode>
{/* <HelloWorld /> */}
    <MyCom />
</React.StrictMode>,
document.getElementById('root')
);