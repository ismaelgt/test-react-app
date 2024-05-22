import { AnalyticsBrowser } from '@segment/analytics-next'

import logo from './logo.svg';
import './App.css';

export const analytics = new AnalyticsBrowser();
analytics.load({ writeKey: 'Kgnz8068ilKRbIeC54nsZ1nc9znT6Puv' });

function App() {
  const onClick = () => {
    analytics.track('My Custom Event', {
      foo: 'Foo',
      bar: 'Bar',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Heap test app
        </p>
        <button onClick={onClick}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
