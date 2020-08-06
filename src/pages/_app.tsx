import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { Head } from 'next/document'

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    store.subscribe(() => console.log('Store : ', store.getState()))
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
