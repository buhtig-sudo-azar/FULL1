
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
let counter = 9;
createRoot(document.getElementById('root')).render(
  <App counter={counter} />
)
