import React from 'react'
import Author from '../../../models/Author'
import authorsList from './authors'

export interface AuthorsContextValue {
  authors: { [id: string]: Author }
}

export const AuthorsContext = React.createContext<AuthorsContextValue>({
  authors: {}
})

export interface AuthorsProviderProps {
  children: React.ReactNode
}

export function AuthorsProvider({
  children
}: AuthorsProviderProps): JSX.Element {
  const authors = authorsList.reduce((authorsMap, author) => {
    authorsMap[author.id] = author
    return authorsMap
  }, {} as { [id: string]: Author })

  return (
    <AuthorsContext.Provider value={{ authors }}>
      {children}
    </AuthorsContext.Provider>
  )
}

export default AuthorsContext
