import React from 'react';
import ReactDOM from 'react-dom';

/**************** Local Imports *******************/
import * as serviceWorker from './serviceWorker';
import App from './App';
import Firebase, { FirebaseContext } from './utils/Firebase';
import AppWrapper from './utils/context/user-context';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <AppWrapper>
      <App />
    </AppWrapper>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
