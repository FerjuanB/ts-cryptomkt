import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency, CryptoPrice, Pair } from "./types"
import { fetchCurrentPrice, getCryptos } from "./services/Cryposervice"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    cryptoPrice: CryptoPrice //viene de los types, que a su vez tiene inferido del schema de zod
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>

}



export const useCryptoStore = create <CryptoStore>()(devtools((set)=>({
    cryptoCurrencies:[],
    cryptoPrice: { IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading:false,
    fetchCryptos: async () =>{
    const cryptoCurrencies = await getCryptos()
    set(()=>({
            cryptoCurrencies //se agrega una sola vez el nombre dado a que esto cryptoCurrencies:cryptoCurrencies es redundante
    }))
    },
    fetchData: async (pair) =>{
        set(()=>({
            loading:true
         }))
        const cryptoPrice =   await fetchCurrentPrice(pair)
     set(()=>({
        cryptoPrice,
        loading:false
     }))
    }
})))