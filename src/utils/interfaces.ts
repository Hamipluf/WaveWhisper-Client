export interface dataUser {
    code: number,
    data: {
        token: string,
        user: {
            id?: number,
            name: string,
            lastname: string,
            email: string,
            role: "admin" | "user",
        }
    }
    message: string,
    success: boolean
}
export interface dataCurrent {
    code: number,
    data: {
        id: number,
        name: string,
        lastname: string,
        email: string,
        role: "admin" | "user",
    },
    message: string,
    success: boolean
}
export interface dataForm {
    name?: string,
    lastname?: string
    email: String;
    password: String;
  }