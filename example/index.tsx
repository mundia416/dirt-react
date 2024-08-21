import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Button } from '../.';

const App = () => {
  return (
    <div>
      <p >Hello World</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
