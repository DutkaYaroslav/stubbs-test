// невеличкий мій висновок:
// - інпути можна було б зробити реюзабильним, але я їх використовував з фетчами і робив спочатку все в одному компоненті. ТОму не встиг нормально переробити.Стилі теж повторював
// - робив без редаксу, бо давно не використовував і боявся не встигнути. Через тиждень планую повторити його
// - тайпскріпт трохи знаю, але на практиці важкувато було особливо з фетчами.
// тільки на вихідні помітив, що треба було конкретну кількість айтемів на сторінку відображати. не встиг переробити, бо від того й пагінація залежить теж. Якщо це буде критично, то я дороблю.
import React from 'react';
import Jobfocus from './components/Jobfocus/Jobfocus';
import Soft from './components/Soft/Soft';
import Navigation from './components/Navigation/Navigation';
import Technical from './components/Technical/Technical';
import Functional from './components/Functional/Functional';
import Domain from './components/Domain/Domain';
import Patent from './components/Patent/Patent';
import Personal from './components/Personal/Personal';
import { Route, Switch } from 'react-router-dom';
import '@fontsource/roboto';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/jobfocus">
          <Jobfocus />
        </Route>
        <Route path="/softskills">
          <Soft />
        </Route>
        <Route path="/technicalskills">
          <Technical />
        </Route>
        <Route path="/functionalexpertise">
          <Functional />
        </Route>
        <Route path="/domainexpertise">
          <Domain />
        </Route>
        <Route path="/patentexpertise">
          <Patent />
        </Route>
        <Route path="/personalexpertise">
          <Personal />
        </Route>
      </Switch>
    </>
  );
}

export default App;
