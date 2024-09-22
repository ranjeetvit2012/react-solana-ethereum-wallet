
import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import { Buffer } from 'buffer';
import { Button,Card } from "flowbite-react";
import { MdAccountBalanceWallet  } from "react-icons/md";
import axios from "axios"
import { SendAmount } from "./SendAmount";
import { GrTransaction } from "react-icons/gr";
import {TransactionList} from "./TransactionList"
import { BalanceModel } from "./BalanceModel";

export const EthWallet = (props:any) => {
   console.log("props",props)
    window.Buffer = Buffer;
    const {mnemonic} = props
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState<any>([]);
    const [balance,setBalance] = useState<any>(null)
    const [seedMoneyModel,setSendMoneyMode] = useState<any>(false)
    const [publicKey,setPublicKey] = useState<any>()
    const [transaction,setTransactionHandle] = useState<boolean>(false)
    const [balanceModel,setOpenBalanceModal] = useState<boolean>(false)
    
   
    
    //const [disabled,setDisabled] = useState<boolean>(false)

   const handleWalletBalance =async (p: any)=>{
    setOpenBalanceModal(true)
    setPublicKey(p)
        console.log("handleWalletBalance",p)
        const url ="https://eth-mainnet.g.alchemy.com/v2/zmbE5gGpfOHKJ8N0p7-a55DoVcw65CLz";
        let payload:any ={
          "jsonrpc": "2.0",
          "id": 1,
          "method": "eth_getBalance",
          "params": [p, "latest"]
      } 
  const walletRes =  await axios({
      method: 'post',
      url: url,
      data: payload
    });
    const decimalValue = parseInt(walletRes?.data?.result, 16);
    console.log("walletRes",walletRes?.data?.result)
    console.log("balance",decimalValue)

    setBalance(decimalValue)


    }

    const sendMoneyOpenModal = (p:any)=>{
      setSendMoneyMode(true)
      setPublicKey(p)
    }


    const onCloseModal = ()=>{
      console.log("onCloseModal")
      setSendMoneyMode(false)
      setOpenBalanceModal(false)
    }

    const transactionHandle = (p:any)=>{
       let check = transaction ? false :true
      setTransactionHandle(check)
    }


    return (
        <div>
            <Button onClick={async function() {
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                 const hdNode = HDNodeWallet.fromSeed(seed);
                 const child = hdNode.derivePath(derivationPath);
                 const privateKey = child.privateKey;
                 console.log("privateKey",privateKey)
                 const wallet = new Wallet(privateKey);
                 console.log("wallet",wallet)
                 setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }} disabled ={mnemonic?false:true}>
                Add ETH wallet
            </Button>

            {addresses.map((p:any,index:any) => <div>
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
                  src='../../public/ethereum.png'
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-900
                 dark:text-white">Ethereum </p>
                {p}  
              </div>
              <div className="min-w-0 flex-1" >
                <p className="truncate text-sm font-medium text-gray-900
                 dark:text-white"> </p>
                <Button size="xs" onClick={()=>handleWalletBalance(p)}>
        <MdAccountBalanceWallet  className="mr-2 h-5 w-5" />
        Get Balance
      </Button>
                 
               
              </div>
              <div className="min-w-0 flex-1">
                {/* <p className="truncate text-sm font-medium text-gray-900
                 dark:text-white">Send Money</p> */}
                  <Button size="xs" onClick={()=>sendMoneyOpenModal(p)}>
        <MdAccountBalanceWallet  className="mr-2 h-5 w-5" />
        Send Money
      </Button>
                
               
              </div>

              <div className="min-w-0 flex-1">
                {/* <p className="truncate text-sm font-medium text-gray-900
                 dark:text-white">Send Money</p> */}
                  <Button size="xs" onClick={()=>transactionHandle(p)}>
        <GrTransaction  className="mr-2 h-5 w-5" />
        Transaction List
      </Button>
                
               
              </div>
              
            </div>
          </li>
         
         
        </ul>
      </div>
    </Card>
       </div>
       <BalanceModel setOpenModal={balanceModel} publicKey ={publicKey} balance ={balance} onCloseModal ={onCloseModal}/>
       <SendAmount seedMoneyModel={seedMoneyModel} publicKey ={publicKey} onCloseModal ={onCloseModal}/>
         {transaction ? <TransactionList />:"" }
         
         
               
            </div>)}
        </div>
    )
}