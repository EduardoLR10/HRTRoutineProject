import React from 'react'
import { SectionProps } from '../components/Section'

export interface SectionContextValue {
  sectionIdx: number
  setSectionIdx: (sectionIdx: number) => void
}

export const SectionContext = React.createContext<SectionContextValue>({
  sectionIdx: 0,
  setSectionIdx: () => {
    throw Error('Missing SectionProvider')
  }
})
export default SectionContext

export interface SectionProviderProps extends SectionContextValue {
  children: React.ReactNode
}

export function SectionProvider({
  children,
  sectionIdx,
  setSectionIdx
}: SectionProviderProps): JSX.Element {
  return (
    <SectionContext.Provider value={{ sectionIdx, setSectionIdx }}>
      {children}
    </SectionContext.Provider>
  )
}
