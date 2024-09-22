import {z} from 'zod'

export const cryptoSchema = z.object({
    code:z.string(),
    name:z.string()
})


export const CryptoCurrencyResponseSchema = z.array(
    z.object({
        CoinInfo:z.object({
            Fullname:z.string(),
            Name:z.string()
        })
    }))
    
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)
