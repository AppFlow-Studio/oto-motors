'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { BuildYourDealModal } from '@/components/build-your-deal-modal'

type DealContextValue = {
  open: boolean
  openDeal: () => void
  closeDeal: () => void
}

const DealContext = createContext<DealContextValue | null>(null)

export function useDeal() {
  const ctx = useContext(DealContext)
  if (!ctx) throw new Error('useDeal must be used inside DealProvider')
  return ctx
}

export function DealProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openDeal = useCallback(() => setOpen(true), [])
  const closeDeal = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ open, openDeal, closeDeal }), [open, openDeal, closeDeal])

  return (
    <DealContext.Provider value={value}>
      {children}
      <BuildYourDealModal open={open} onClose={closeDeal} />
    </DealContext.Provider>
  )
}
