import { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          selectedIndex={selectedIndex}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            component={() => <div style={{ height: '100vh' }}>Home</div>}
          />
          <Route exact path='/services' component={() => <div>Services</div>} />
          <Route
            exact
            path='/customsoftware'
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path='/mobileapps'
            component={() => <div>Mobile Aps</div>}
          />
          <Route exact path='/websites' component={() => <div>Websites</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>Revolution</div>}
          />
          <Route exact path='/about' component={() => <div>About Us</div>} />
          <Route
            exact
            path='/contact'
            component={() => <div>Contact Us</div>}
          />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          value={value}
          selectedIndex={selectedIndex}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
