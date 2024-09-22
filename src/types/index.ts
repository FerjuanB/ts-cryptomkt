import { z } from 'zod'

import {CryptoCurrencyResponseSchema, cryptoSchema} from '../schema/crypto-schema'

export type Currency = z.infer<typeof cryptoSchema>

export type CryptoCurrency = z.infer <typeof CryptoCurrencyResponseSchema>