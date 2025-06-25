import { StrictMode } from 'react';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

// Redux 스토어
// import store from '@redux/store';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );

// Redux toolkit 스토어
import store from '@/RTK/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
