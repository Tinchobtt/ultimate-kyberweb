import { Button } from "@mui/material"
import TransferList from "../../../common/transferList/TransferList"

const Package = () => {
  return (
    <section id="packageSection" style={{display: "flex", flexDirection: 'column', alignItems: 'center'}} className="shadow">
      <h2 className="title" style={{alignSelf: 'start'}}>Built Your Package</h2>
      <div className="transfer-container">
        <TransferList />
        <Button variant="contained" sx={{textTransform: 'unset', borderRadius: '30px', marginTop: '4rem'}}>
            Get it!
        </Button>
      </div>
    </section>
  )
}

export default Package