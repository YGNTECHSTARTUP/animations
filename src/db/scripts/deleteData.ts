import { db } from "../db"
import { Data } from "../schema"


export const deleteData = async () => {
    await db.delete(Data)
}
deleteData()