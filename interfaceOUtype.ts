/**  Types  */

type UserType = {
    id: number
    nome: string
}

type TPayment = {
    method: string
}

/** união de 2 types  */

type TAcount = UserType & TPayment


/**  Interfaces  */

interface userIterface {
    id: number
    name: string
}

interface Ipayment {
    method: string
}

/** União de 2 Interface 
 */

interface IAccount extends userIterface, Ipayment {}
