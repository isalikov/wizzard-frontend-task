import { createRoot } from 'react-dom/client';

import App from './App';

const bootstrap = () => {
  const selector = document.querySelector('#root');
  if (selector) {
    const root = createRoot(selector);

    root.render(<App />);
  } else {
    throw new Error("Can't get document root selector");
  }
};

export default bootstrap;
