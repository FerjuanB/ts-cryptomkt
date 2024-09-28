import {z} from 'zod'

export const cryptoSchema = z.object({
    code:z.string(),
    name:z.string()
})


export const CryptoCurrencyResponseSchema = z.object({
        CoinInfo:z.object({
            FullName:z.string(),
            Name:z.string()
        })
    })
    
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

export const PairSchema = z.object({
      currency:z.string(),
        criptocurrency:z.string()
})

export const CryptoPryceSchema = z.object({
    IMAGEURL:z.string(),
    PRICE:z.string(),
    HIGHDAY:z.string(),
    LOWDAY:z.string(),
    CHANGEPCT24HOUR:z.string(),
    LASTUPDATE:z.string()
})