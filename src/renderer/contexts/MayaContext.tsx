import React, { createContext, useContext } from 'react'

import {
  client$,
  clientState$,
  address$,
  addressUI$,
  explorerUrl$,
  reloadBalances,
  balances$,
  txs$,
  subscribeTx,
  resetTx,
  sendTx,
  txRD$,
  reloadFees,
  fees$
} from '../services/maya'

export type MayaContextValue = {
  client$: typeof client$
  clientState$: typeof clientState$
  address$: typeof address$
  addressUI$: typeof addressUI$
  explorerUrl$: typeof explorerUrl$
  reloadBalances: typeof reloadBalances
  balances$: typeof balances$
  txs$: typeof txs$
  subscribeTx: typeof subscribeTx
  resetTx: typeof resetTx
  sendTx: typeof sendTx
  txRD$: typeof txRD$
  reloadFees: typeof reloadFees
  fees$: typeof fees$
}

const initialContext: MayaContextValue = {
  client$,
  clientState$,
  address$,
  addressUI$,
  explorerUrl$,
  reloadBalances,
  balances$,
  txs$,
  subscribeTx,
  resetTx,
  sendTx,
  txRD$,
  reloadFees,
  fees$
}

const MayaContext = createContext<MayaContextValue | null>(null)

export const MayaProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
  return <MayaContext.Provider value={initialContext}>{children}</MayaContext.Provider>
}

export const useCosmosContext = () => {
  const context = useContext(MayaContext)
  if (!context) {
    throw new Error('Context must be used within a MayaProvider.')
  }
  return context
}
