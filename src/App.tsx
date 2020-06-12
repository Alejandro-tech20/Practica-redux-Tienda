import React, { FC } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { App2 } from './container/App'


interface AppProps {
    store: Store;
}


export const App: FC<AppProps> = ({
    store
}) => (
        <Provider store={store}>
            <App2 />
        </Provider>
    )