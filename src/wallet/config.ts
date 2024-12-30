
import { http, createConfig } from 'wagmi'
import { arbitrum, base, holesky, mainnet, optimism, polygon, } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
// import {
//   rainbowWallet,
//   walletConnectWallet,
// } from '@rainbow-me/rainbowkit/wallets';



export const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum, base, holesky],
  connectors: [
    injected(),
  ],
  transports: {
      [holesky.id]: http(),
      "1": http(),
      "10": http(),
      "137": http(),
      "42161": http(),
      "8453": http(),
  },
})