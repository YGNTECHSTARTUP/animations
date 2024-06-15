import { db } from "../db";
import { Data } from "../schema";
export const selectData = async () => {
    const data = await db.select().from(Data)
    const randomPokemonID = Math.floor(Math.random() * 898)+2;
    console.log(randomPokemonID)
    return data
}
selectData()