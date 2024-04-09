import {useAccount, useDisconnect} from 'wagmi';
import {ConnectButton} from "./ConnectButton";
export default function WalletContainer() {

    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { isConnected } = useAccount();

    return (
        <div>
            <span>{isConnected ? <p>Connected</p> : <p>Not connected</p>}</span>
            <div className="container"><ConnectButton/></div>
            {address}
            <br/>
            <button className="button" onClick={() => disconnect()} type="button">
                Disconnect
            </button>
        </div>
    );
}


