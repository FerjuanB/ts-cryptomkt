import { useCryptoStore } from "../store"
import Spinner from "./Spinner"


export const DisplayCryptoPrice = () => {
   const cryptoPrice =  useCryptoStore((state)=>state.cryptoPrice)
   const loading =  useCryptoStore((state)=>state.loading)
   const hasPrice = Object.values(cryptoPrice).every((value) => value !== '')
  console.log(hasPrice)


    const result = hasPrice ?(
        <>
            <h2>Cotización</h2>
            <div className="result">
                <img src={`https://cryptocompare.com/${cryptoPrice.IMAGEURL}`} alt="imagen de cryptoMoneda"  />
                <div>
                    <p>PRECIO: <span>{cryptoPrice.PRICE}</span></p>
                    <p>Máximo del dia: <span>{cryptoPrice.HIGHDAY}</span></p>
                    <p>Mnimo del dia: <span>{cryptoPrice.LOWDAY}</span></p>
                    <p>variacion en 24hs: <span>{cryptoPrice.CHANGEPCT24HOUR} %</span></p>
                    <p> <span>{cryptoPrice.LASTUPDATE}</span></p>
                </div>
            </div>
        </>):""

    return (

  <>
  {loading? <Spinner/> :
    <div className="result-container">
     {result}
    </div>
    }
    </>      
  )
}