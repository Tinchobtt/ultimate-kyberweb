import { Button } from "@mui/material"
import TransferList from "../../../common/transferList/TransferList"
import { HashLink } from "react-router-hash-link"

const Package = () => {
  return (
    <section id="packageSection" className="">
      <h2 className="title">Armá tu paquete</h2>
      <div className="transfer-container">
        <TransferList />
        <HashLink style={{color: '#fff'}} to={'/contact/-1#start'}>
          <Button 
              variant="contained" 
              size="large"
              sx={{borderRadius: '30px', textTransform: 'unset', marginTop: '4rem'}}
          >Conseguir
          </Button>
        </HashLink>
      </div>
    </section>
  )
}

export default Package