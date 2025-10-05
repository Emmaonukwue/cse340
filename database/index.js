const { Pool } = require("pg")
require("dotenv").config()

let pool

// Determine environment and set SSL accordingly
if (process.env.NODE_ENV === "development") {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // needed for local dev with Render DB
  })
  console.log("🧩 Connected using DEVELOPMENT settings")
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // required for Render production
  })
  console.log("🚀 Connected using PRODUCTION settings")
}

// Export helper for debugging in development
if (process.env.NODE_ENV === "development") {
  module.exports = {
    async query(text, params) {
      try {
        const res = await pool.query(text, params)
        console.log("✅ Executed query:", text)
        return res
      } catch (err) {
        console.error("❌ Query error:", text, err)
        throw err
      }
    },
  }
} else {
  module.exports = pool
}
