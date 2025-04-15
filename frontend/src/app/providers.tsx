'use client'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const projectId = 'a24e27dbd461550ee108fc52a441de0d' // Replace with your actual projectId from https://cloud.walletconnect.com

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://rpc.ankr.com/base_sepolia/507d99ac6fe774acfa5c4ebb9820ab1e8b6e056114b0673c5c917723639dd018`,
      }),
    }),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'METABORONG',
  projectId,
  chains,
})

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
} 