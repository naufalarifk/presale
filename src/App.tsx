import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter } from "react-router"
import { RootLayout } from "./routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/wallet/config";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

function App() {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize='compact'>
          <BrowserRouter>
            <RootLayout />
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
