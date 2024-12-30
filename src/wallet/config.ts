
import { http, createConfig } from 'wagmi'
import { bsc, } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
// import {
//   rainbowWallet,
//   walletConnectWallet,
// } from '@rainbow-me/rainbowkit/wallets';



export const config = createConfig({
  chains: [bsc],
  connectors: [
    injected(),
  ],
    transports: {
      [bsc.id]: http()
  },
})