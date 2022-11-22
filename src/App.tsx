import { Provider } from 'react-redux'
import './App.css'
import { UserForm } from './Components/UserForm'
import Store from './modules/Redux/ClientStore'

export const App = (): JSX.Element => {

    return (
        <Provider store={Store}>
            <div className="App">
                <div className="App-header">
                    <UserForm />
                </div>
            </div>
        </Provider>
    )
}