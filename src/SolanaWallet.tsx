// import { useState } from "react"
// import { mnemonicToSeed } from "bip39";
// import { derivePath } from "ed25519-hd-key";
// import { Keypair } from "@solana/web3.js";
// import nacl from "tweetnacl"


// sir code
// export function SolanaWallet({ mnemonic }:any) {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [publicKeys, setPublicKeys] = useState<any>([]);

//     return <div>
//         <button onClick={async function() {
//             const seed = await mnemonicToSeed(mnemonic);
//             const path = `m/44'/501'/${currentIndex}'/0'`;
//             const derivedSeed = derivePath(path, seed.toString("hex")).key;
//             const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
//             const keypair = Keypair.fromSecretKey(secret);
//             setCurrentIndex(currentIndex + 1);
//             setPublicKeys([...publicKeys, keypair.publicKey]);
//         }}>
//             Add SOL wallet
//         </button>
//         {publicKeys.map((p:any) => <div>
//             {p.toBase58()}
//         </div>)}
//     </div>
// }


// my code //

import { useState } from "react"
import { mnemonicToSeed,mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { Button,Card } from "flowbite-react";
import nacl from "tweetnacl"

export function SolanaWallet({ mnemonic }:any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState<any>([]);
    //const [publicKey, setPublicKey] = useState<any>();

    return <div>
        <Button onClick={async function() {
            const keypair = Keypair.generate();

            // Extract the public and private keys
            const publicKey = keypair.publicKey.toString();
            const secretKey = keypair.secretKey;
            console.log("secretKey",secretKey)
           console.log("publicKey",publicKey)
            setPublicKeys([...publicKeys,publicKey]);
            console.log("publicKeys",publicKeys)
           // const keypair = Keypair.generate();

// // Extract the public and private keys
// const publicKey = keypair.publicKey.toString();
// const secretKey = keypair.secretKey;

// // Display the keys
// console.log("Public Key:", publicKey);
// console.log("Private Key (Secret Key):", secretKey);

// // Convert the message "hello world" to a Uint8Array
// const message = new TextEncoder().encode("hello world");

// const signature = nacl.sign.detached(message, secretKey);
// const result = nacl.sign.detached.verify(
//   message,
//   signature,
//   keypair.publicKey.toBytes(),
// );

// console.log(result);
            
            ///const seed = mnemonicToSeedSync(mnemonic)
            // const seed =await mnemonicToSeed(mnemonic);
            // const path = `m/44'/501'/${currentIndex}'/0'`;
            // const derivedSeed = derivePath(path, seed.toString("hex")).key;
            // const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            // const keypair = Keypair.fromSecretKey(secret);
            // setCurrentIndex(currentIndex + 1);
            // setPublicKeys([...publicKeys, keypair.publicKey]);
        }}>
            Solana wallet
        </Button>
        {publicKeys.map((p:any,index:any) => <div>
            <div className="wallet-s">
       <Card className="min-w-sm min-h-96">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >Wallet-{index +1}</h5>
      
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
              <img
                  alt="Neil image"
                  height="32"
                  src='../../public/solana-sol-logo.png'
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900
                 dark:text-white">Solana </p>
                {p}  
              </div>
              <div className="min-w-0 flex-1" >
                <p className="truncate text-sm font-medium text-gray-900
                 dark:text-white"> </p>
                {/* <Button size="xs" onClick={()=>handleWalletBalance(p)}>
        <MdAccountBalanceWallet  className="mr-2 h-5 w-5" />
        Get Balance
      </Button> */}
                 
               
              </div>
              <div className="min-w-0 flex-1">
                {/* <p className="truncate text-sm font-medium text-gray-900
                 dark:text-white">Send Money</p> */}
                  {/* <Button size="xs" onClick={()=>sendMoneyOpenModal(p)}>
        <MdAccountBalanceWallet  className="mr-2 h-5 w-5" />
        Send Money
      </Button> */}
                
               
              </div>

              <div className="min-w-0 flex-1">
                {/* <p className="truncate text-sm font-medium text-gray-900
                 dark:text-white">Send Money</p> */}
                  {/* <Button size="xs" onClick={()=>transactionHandle(p)}>
        <GrTransaction  className="mr-2 h-5 w-5" />
        Transaction List
      </Button> */}
                
               
              </div>
              
            </div>
          </li>
         
         
        </ul>
      </div>
    </Card>
       </div>
            {/* {p.toBase58()} */}
        </div>)}
       
    </div>
}