import React from 'react'
import Products from './components/Products/Products';

// import Navbar from './components/Products/Navbar/Navbar';

import { Navbar} from './components';
const App = () => {
  return (
    <div>
        <Navbar />
        <Products />
    </div>
  )
}

export default App;