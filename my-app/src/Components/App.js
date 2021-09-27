import React from 'react';
import Aside from './Aside';
// import Articles from './Articles';
import Home from './Home';
class App extends React.Component {
  render() {
    return (
      <>
        <div className='container'>
          <section>
            <Aside />
          </section>
          <Home />
        </div>
      </>
    );
  }
}
export default App;
