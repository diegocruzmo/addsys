import { Route, Switch } from 'wouter'
import DashboardView from './views/DashboardView'
import SignInView from './views/SignInView'
import SignUpView from './views/SignUpView'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Toaster />
      <Switch>
        <Route path='/' component={SignInView} />
        <Route path='/signup' component={SignUpView} />
        <Route path='/dashboard' component={DashboardView} />
      </Switch>
    </div>
  )
}

export default App
