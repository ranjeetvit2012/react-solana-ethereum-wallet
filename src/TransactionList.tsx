
import { Table } from "flowbite-react";
import {useEffect,useState} from 'react'
import axios from 'axios'

export const TransactionList = ()=>{
  const [transfers, setTransfers] = useState<any>([]);

  useEffect(() => {

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const fetchData = async () => {
    try {
      let url ='https://eth-mainnet.g.alchemy.com/v2/zmbE5gGpfOHKJ8N0p7-a55DoVcw65CLz'
     const responseData = await axios({
    method: 'post',
    url: url,
    data: JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method: 'alchemy_getAssetTransfers',
      params: [
        {
          fromBlock: '0x0',
          toBlock: 'latest',
          toAddress: '0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1',
          withMetadata: false,
          excludeZeroValue: true,
          maxCount: '0x3e8',
          category: ['external'],
        },
      ],
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  console.log("responseData",responseData?.data?.result?.transfers)

    //   const data = await response.json();
    //  // console.log("data",data)
    //  let transactionData =  JSON.stringify(data.result, null, 2);
   //  console.log("transactionData",transactionData)
      setTransfers(responseData?.data?.result?.transfers); // Assuming the result is in `data.result`
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
    
    return(
        <div className="overflow-x-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell> blockNum </Table.HeadCell>
            <Table.HeadCell>UniqueId</Table.HeadCell>
            <Table.HeadCell>Hash</Table.HeadCell>
            <Table.HeadCell>From</Table.HeadCell>
            <Table.HeadCell>To</Table.HeadCell>
            <Table.HeadCell>Value</Table.HeadCell>
            
            <Table.HeadCell>tokenId</Table.HeadCell>
            <Table.HeadCell>Asset</Table.HeadCell>
            <Table.HeadCell>RawContract</Table.HeadCell>
            
           
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {transfers?.map((data:any)=>(
              
         
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data?.blockNum}
              </Table.Cell>
              <Table.Cell>{data?.uniqueId}</Table.Cell>
              <Table.Cell>{data?.hash}</Table.Cell>
              <Table.Cell>{data?.from}</Table.Cell>
              <Table.Cell>
              {data?.to}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {data?.value}
              </Table.Cell>
              <Table.Cell>{data?.tokenId}</Table.Cell>
              <Table.Cell>{data?.asset}</Table.Cell>
              <Table.Cell>{data?.category}</Table.Cell>
              <Table.Cell>
              {data?.rawContract?.value} -{data?.rawContract?.address}-{data?.rawContract?.decimal}
              </Table.Cell>
            </Table.Row>
           ))}
          </Table.Body>
        </Table>
      </div>
    )
}