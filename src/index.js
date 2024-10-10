import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import True_o_False from './cajita de modulos/True_o_False';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

    <div className='d-flex w-100 h-100 flex-column justify-content-center'>
        <App ></App>
    </div>

  // {/* </React.StrictMode> */}
);
