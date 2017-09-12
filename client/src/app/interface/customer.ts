export interface CustomerInterface {
  _id: string,
  orgid: string,
  foretagsnamn: string,
  adress: string,
  postnr: string,
  postort: string,
  kontaktnamn: string,
  vd: string,
  __v: number,
  affar: {
    _id: string,
    _summa: string,
    anteckning: string,
    bifodag: string,
    agare: string,
    __v: number,
    order: string,
    status: string
  },
  uppdaterad: string,
  skapad: string,
  status: string,
  koncernmoderbolagsnamn: string,
  juridiskform: string,
  antalanstallda: number,
  kontakthemsida: string
}
