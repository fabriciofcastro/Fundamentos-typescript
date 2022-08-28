type UserCount =  {
    id: number
    name: string
}

type Char = {
    nickName: string
    level: number
}

type PlayerInfo = UserCount & Char

let info: PlayerInfo = {
     id: 12,
     name: "Fabricio Castro",
     nickName: "Fabricio",
     level: 15,
}