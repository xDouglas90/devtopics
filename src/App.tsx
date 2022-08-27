import { Topbar } from "./components";
import { Home } from "./pages/Home";

import { FontStyles } from "./styles/FontStyles";
import { GlobalStyles } from "./styles/GlobalStyles";


function App():void {
  return (
    <>
      <FontStyles />
      <GlobalStyles />
      
      <Topbar />

      <Home />
    </>
  );
}

export default App;
