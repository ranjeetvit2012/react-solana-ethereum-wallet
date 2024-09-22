
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

 export const SendAmount = (props:any)=>{
    const {seedMoneyModel,publicKey,onCloseModal} = props
   // const [openModal, setOpenModal] = useState(true);
 // const [from, setFrom] = useState('');
  const [amout, setAmount] =  useState('')
  const [to, setTo] = useState('')

  const sendMoneyHandler = ()=>{
     console.log("from",publicKey,"amout",amout,"to",to)
     //onCloseModal.close()
     
  }

  
  return (
    <>
     
      <Modal show={seedMoneyModel} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Send Money</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="from" value="From" />
              </div>
              <TextInput
                id="from"
                value={publicKey}
               // onChange={(event) => setFrom(publicKey)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="to" value="To" />
              </div>
              <TextInput id="text"
               type="text"
               onChange={(event) => setTo(event.target.value)}
                required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amout" value="Amount" />
              </div>
              <TextInput id="text" type="text" 
               onChange={(event) => setAmount(event.target.value)}
              required />
            </div>
            <br></br>
            <div className="w-full">
              <Button onClick={sendMoneyHandler}>Send</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

 