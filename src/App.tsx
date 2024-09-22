import { useEffect } from "react"
import { CriptoSearchForm } from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"

const App = () => {
 const fetchCryptos = useCryptoStore((state)=> state.fetchCryptos)
  
  useEffect(()=>{
    fetchCryptos()
  },[])
  return (
<>
<div className="container">
    <h1 className="app-title">Cotizá tu <span className="">Criptomoneda</span></h1>
    <div className="content">
      <CriptoSearchForm/>
    </div>
</div>
</>
  )
}
export default App