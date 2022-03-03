import Houtes from './Houtes'
import { ContextProvider } from './context/index'

const App = () => (
    <ContextProvider>
        <Houtes />
    </ContextProvider>
)

export default App
