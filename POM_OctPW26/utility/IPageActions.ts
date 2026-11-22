

export interface IpageActions{

 credential(usr: string, pwd: string) : Promise<void>

 clickLogin():Promise<void>

}