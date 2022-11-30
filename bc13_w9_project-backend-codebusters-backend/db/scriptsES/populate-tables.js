import { pool } from "../index.js"
import { populateTweetsTableES } from "../helpersES.js"

try {
    await populateTweetsTableES();
    console.log("Populated all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}