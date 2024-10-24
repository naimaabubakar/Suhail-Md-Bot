const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348066382447";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || " SUHAIL_19_05_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZGtlMlgzNHV1dXZPMjRmWStVOEtaQTU1c2l3SlpWb2hzcCsvV2VtT0RpMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWEk2TXowbGhRR21yYkR4UUFDR1o0UVwiLFxuICBcInBob25lSWRcIjogXCIwMzgzNDg2Ni01YjcyLTQwMmEtOWIyMC1hMTQ4YjA1YmRmYmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxNixcbiAgICAgIDM3LFxuICAgICAgNDYsXG4gICAgICAxMjMsXG4gICAgICAyMDUsXG4gICAgICAzNCxcbiAgICAgIDI1NSxcbiAgICAgIDg5LFxuICAgICAgMTgyLFxuICAgICAgNTgsXG4gICAgICAxNzAsXG4gICAgICAyMjksXG4gICAgICA1OCxcbiAgICAgIDE4OCxcbiAgICAgIDIwMSxcbiAgICAgIDE0MixcbiAgICAgIDIzOSxcbiAgICAgIDE1LFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMTEzLFxuICAgICAgMTc5LFxuICAgICAgODQsXG4gICAgICA5NCxcbiAgICAgIDExNyxcbiAgICAgIDk1LFxuICAgICAgMzgsXG4gICAgICA4MyxcbiAgICAgIDEyLFxuICAgICAgNzAsXG4gICAgICA4OSxcbiAgICAgIDE5NCxcbiAgICAgIDE4MCxcbiAgICAgIDEzLFxuICAgICAgMTAyLFxuICAgICAgMTgzLFxuICAgICAgNTQsXG4gICAgICAzNixcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4OVhNRzNWNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NjM4MjQ0Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVW1tdSBGYXJoYW4gY29sbGVjdGlvbiBuZCBXb21lbidzIFByb2R1Y3RzIFdob2xlc2FsZSBBdCBBZmZvcmRhYmxlIFByaWNlXCIsXG4gICAgXCJsaWRcIjogXCI5MzQ4MDUzMzY4MDI1Mjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpaXVWOFE1dTdmdUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVU9jVXQwZ1ZUMTN1OStpSkxoYWlkeXZkL09pS0I3WWhQTUo5Z3VoUWlUQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsOGJSb2dwSm1sajU3VzVnUkhVeG81NDRGY3J1anJHTU9Ma1pSTFZmZ0VkKzdTeTh0WnBaQnZDMmhsZVVVMGxaWjZpM1JKeHZ2cUdLaTFrS1NrRUNEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFb0RaT1d4WGt0OS91SmJDTGx1aXNZSFoxQXA0MDh0b3F4eDNpMFpGeEY4K21iZ3FZcFNIN2pPckxPbERHcEtydW9xV250b2s3aUEvc1B4cEVyUDJqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2MzgyNDQ3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2MjM5MTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCN0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI3SC5qc29uIjogIntcImtleURhdGFcIjpcIi9BVEJUbytrck0vYlJoM1oxYThTN2g5YVBPNVBDSU9iMVdTTlhTMGFSMDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwMTY3ODAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk2MjM5MjAzMjJcIn0iCn0= ",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
