import ReactDOM from 'react-dom/client';

import { UserContextProvider } from './contexts/UserContext';

import './index.css';


const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <UserContextProvider />,
);
