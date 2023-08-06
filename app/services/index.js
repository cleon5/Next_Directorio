import { GetUser } from "../api";

export async function getUser(id){
    let r = await GetUser(id)
    return r;
}