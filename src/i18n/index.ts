import en from './en'
import da from './da'

export type Locale = 'en' | 'da'
export const translations = { en, da } as const
export { en, da }
