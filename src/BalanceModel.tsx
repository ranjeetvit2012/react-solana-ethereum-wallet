
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function BalanceModel(props:any) {
  console.log("props",props)
 // const [openModal, setOpenModal] = useState(true);
 const {setOpenModal,onCloseModal,balance,publicKey} = props
  
  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={setOpenModal} size="md" onClose={() => onCloseModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
                <p>publicKey - {publicKey}</p>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Balance- {balance}
            </h3>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
