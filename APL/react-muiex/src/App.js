import React from 'react';
import DrawerAppBar from './Component/Header/Header';
import ToggleColorMode from './Component/ToggleColorMode';
import Home from './Component/Home/Home';

function App() {
  return (
    <>
      <ToggleColorMode>
        {({ toggleColorMode, mode }) => (
          <>
            <DrawerAppBar toggleColorMode={toggleColorMode} mode={mode} />
            <Home />
          </>
        )}
      </ToggleColorMode>

    </>

  );
}

export default App;
