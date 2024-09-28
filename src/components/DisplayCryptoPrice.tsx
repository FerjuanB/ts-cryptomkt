import { useCryptoStore } from "../store"


export const DisplayCryptoPrice = () => {
   const cryptoPrice =  useCryptoStore((state)=>state.cryptoPrice)
   const hasPrice = Object.values(cryptoPrice).every((value) => value !== '')
  console.log(hasPrice)



    return (
    <div className="result-container">
    {hasPrice ?(
    <>
        <h2>Cotización</h2>
        <div className="result">
            <img src={`https://cryptocompare.com/${cryptoPrice.IMAGEURL}`} alt="imagen de cryptoMoneda"  />
            <div>
                <p>PRECIO: <span>{cryptoPrice.PRICE}</span></p>
                <p>Maximo del dia: <span>{cryptoPrice.HIGHDAY}</span></p>
                <p>Minimo del dia: <span>{cryptoPrice.LOWDAY}</span></p>
                <p>variacion en 24hs: <span>{cryptoPrice.CHANGEPCT24HOUR} %</span></p>
                <p> <span>{cryptoPrice.LASTUPDATE}</span></p>
            </div>
        </div>
    </>):""
    }
    </div>
  )
}