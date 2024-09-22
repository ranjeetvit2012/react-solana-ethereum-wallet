
//import Link from "next/link";
import { Card,Button } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { useState } from "react";
import { generateMnemonic } from "bip39";
import {SolanaWallet} from "./SolanaWallet"
import { Buffer } from 'buffer';
import {EthWallet} from "./EthWallet"

// Make Buffer available globally

function App() {
  window.Buffer = Buffer;
  const [disabled,setDisabled] = useState<boolean>(false)
  const [mnemonic, setMnemonic] = useState("");
  const generateMnemonicHandle =async ()=>{
    const mn  =await generateMnemonic()
    console.log("mn",mn)
    setMnemonic( mn)
    setDisabled(true)
  }


  return (
    <div className="">
      <Card  className="min-w-sm min-h-96" >
        <div className="card-div">
           <div>
           <h4 className="text-2xl font-bold tracking-tight
            text-gray-900 dark:text-white">
       Ranjeet mahto
       </h4>
      
       <Button onClick={generateMnemonicHandle} className="wallet-s">
  Create Seed Phrase
</Button>
      
      
           </div>
           <div>
           
      {/* <Button onClick={handleWalletButton}>{buttons}</Button> */}
           </div>
        </div>

        <div>
        <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Current Secret Pharse </Accordion.Title>
        <Accordion.Content>
        <input type="text" value={mnemonic} disabled={disabled} readOnly></input>
        
        
        
        </Accordion.Content>
      </Accordion.Panel>
      
    </Accordion>

        </div >
         
         {/* wellate code  */}
          <div className="card-div-wallet">
          <div >
          <SolanaWallet mnemonic ={mnemonic} />
          </div>
          
          <div>
<EthWallet mnemonic ={mnemonic} />
</div>
          </div>
        
        
       
      
    </Card>
    </div>
  );
}

export default App
