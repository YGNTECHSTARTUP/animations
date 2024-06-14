import { db } from "../db";
import { Data } from "../schema";
export const selectData = async () => {
    const data = await db.select().from(Data)
    return data
}
