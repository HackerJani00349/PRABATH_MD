const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE "mongodb://mongo:********@autorack.proxy.rlwy.net:43707"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/prabathLK/PRABATH-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.devs = '923163359737 923069197719';
global.website = 'https://github.com/prabathLK/PRABATH-MD' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || 'HASSAN-MD',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '923163359737',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY HASSAN-MD* 🎊',
  ownername:process.env.OWNER_NAME || '',
  sessionName: process.env.SESSION_ID || 'PUT-HERE "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhteWtLSUNMRFhWTC9MSyt2aFVNSFNhN2MwU2FoNk54M1FHa1pWeWdsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnJUdVd6bi9PdTh3MVpFUzBQZWNQSlBUUjZjU2ttUlNPNEx6OGU3SVJ6RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTlNNV2pjbVVzak43eDRtN1NBSnIveGxQMno3c2hVbDdhVkVHU28rVkhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVjVQUlpTVmZ5VFRMdnNJVXF5RWhRVnphUS9oZ2l3dW9pdmlHdEhzKzFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGYnRrZklPY25qdmlYVmd1aE9qc1p2YWE0Z245STRncmRseGNCVXIvMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNEakpzK0x3WVFiNVBKV3dGYTJaM0lRcGxQN1FjQWJ4TmlkcTlsQVNSQjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkQ1ZU1DWFlMWmRocHNneFhnVkoxRm53Z0RQeEpVREhoS0pzanhqRDYzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU5vdUZUVlVJdTRSNis4em5IUyt6d1VwTGN4T0tBNzZ2bmpkUGNDMDdqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE1TGtJd1hlTDBvNWx2eXJtYkRaT0xMUFJQcVQwVnRLVVhnK3BIbmQ3K0hKT21oZ1lCLzhqaHBkazlmaXFYd3BKT1A5VXpMdW9VaitJdGtSYnJUYkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJlOGRxYmYzc3BWREpwb0wyQUdqMWRaNDdzd0Q0OXd0dC93dVNDQ2lEK0U4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAwMzA4MTAzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxRkY1RjYwMjRCOTZEQTJFRTlDQUY2QkRCM0YwRDEwNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NjA3NDk2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwMDMwODEwMzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0ZGOEU4RTFFNTc0NUMwNDM5MkE2RjlERjMzQzY2N0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTYwNzQ5Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDAzMDgxMDM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhDMTNENjlFMTJBMjhBMEYwNEZGMUJCRDYyMTA1MUFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU2MDc1MDF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAwMzA4MTAzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMkQ2MzA4RTZBOTZEMDYwQTY2MjQzRUM1MUUwREQ1NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NjA3NTAxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGelFaU3FMaFNSdWh0T1NwSWR2dUhnIiwicGhvbmVJZCI6IjMwZDZkNWIxLWUxY2MtNGQ2Mi1iZTI2LWIwMWM4MDZhMDU4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySjM3blp0czM5eTIxNlgrSTgrNWJGQzVXUG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHVWK0o1UlVrTTFVSUlYZmt1RWsxWk4vdFFvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFIQlZGVEIyIiwibWUiOnsiaWQiOiI5MjMwMDMwODEwMzg6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE5NTc1NjYwNjYzNjI3NzoxQGxpZCIsIm5hbWUiOiJIYXNzYW4uQXJhaW7wn5iOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOVE43YlFHRU1MYzZyWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2T2U4R3Z6OU54TStQNWVuWmViL2s1czJhUFcxV1F6YlZoTk9wYTVnaFhJPSIsImFjY291bnRTaWduYXR1cmUiOiJic0pPR1hBdGIvSEVrR1R0eEo5elRLd1l4TlUwWUI4UUxlNE5BU2dSRFpnTWNvU1VZbWVHNFp2dERJUHNOK0FSYWQxQXlMTVdxNFV2dUh5T0dHMDRBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSjcxaFYxcStZdGJaa1BNcDlEbmtjNmxGZGd0NEw5Y3pnVzJ6ZGpPUHgyN29LWG9pT2loVGpHajlYSjBlSkFEemJzME1TQVJHQmpSWXJvdnUwNXlVQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMDMwODEwMzg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlam52QnI4L1RjVFBqK1hwMlhtLzVPYk5tajF0VmtNMjFZVFRxV3VZSVZ5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NjA3NDk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpSQyJ9"',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Hassan MD',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'PRABATH-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
