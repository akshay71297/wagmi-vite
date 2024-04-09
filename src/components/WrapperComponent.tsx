import {createConfig, http, WagmiProvider} from 'wagmi';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {base, mainnet, optimism} from "wagmi/chains";
import {injected, safe} from "wagmi/connectors";
import WalletContainer from "./WalletContainer";
const queryClient = new QueryClient();

const config = createConfig({
    chains: [mainnet, optimism, base],
    connectors: [injected(), injected({target: 'metaMask'}), safe()],
    transports: {
        [mainnet.id]: http(),
        [optimism.id]: http(),
        [base.id]: http(),
    },
});

export default function WrapperComponent() {

    return (
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <WalletContainer />
                </QueryClientProvider>
            </WagmiProvider>
    );
}


