import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppRouter } from './AppRouter/AppRouter'
export const App = () => {
    const quertClient = new QueryClient()

    return (
        <QueryClientProvider client={quertClient}>
            <AppRouter />
        </QueryClientProvider>
    )
}
