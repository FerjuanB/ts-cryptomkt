import { z } from 'zod'

import {CryptoCurrencyResponseSchema, CryptoPryceSchema, cryptoSchema, PairSchema} from '../schema/crypto-schema'

export type Currency = z.infer<typeof cryptoSchema>

export type CryptoCurrency = z.infer <typeof CryptoCurrencyResponseSchema>

export type Pair = z.infer <typeof PairSchema>

export type CryptoPrice = z.infer <typeof CryptoPryceSchema>