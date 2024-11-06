
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm";
global.website = process.env.GURL || "https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "trur";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5pVnYxajM1OTJ2TUNuWkcyVWpFSnV1TERYNWFNWHVZUEo3RWIyMWIwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidStUSWN1RWt5bURxc1ZhRElhLzN5cWx0ZjNoQWxCQUVNZkdxOEFaYXUyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRjZzWGZrSnBZaVZIQmtRSE9vZEx6L2NYUzJoYXN2Y2VOQWVKbWRuT0U0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDMk1hR1FFdkNkcGJ4VjNDWms2T0dSVEN5Umc3aFFLc0FQYXlldEdLRGdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OdlhoQU1aNGZVUUUvTjJKZVByYWlCbXJtTXV5akE4SWNpVERkc1RwRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJU0xmYnRxRmZHZzV1Vm5CN2Nyd3N2cnBlSlZBTUg2c2tFNm5tb29NSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0daS2xCdEV6czk1MjBiY1p0dW1xaTVQbndMTEYvSnlYYlFuTGY5cm9uaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNxWGl4b3o2Y3Rtc0NHc01Cc296Y3ZDMW44dUx0bThyWFZNNmkwdENFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBybTlITzlaMTVJeE9Ud3BmSzF0NHlKb0I0NmtlV2ZjRDM5UDJpTlQvUklESUxmTU4rUHc5YkF2KzhLNUtmQzdwMGJGTTdIYkM4aU5WcHB3bkl1WEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJGYXFLa2xDN3p6b2VvdHpWUitXOWs4RmFGVmNFN3RheDI0RGJCSEJrM2VrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzeVBBUGZoV1FTZUZhUVdITm1wVlpRIiwicGhvbmVJZCI6IjRmMWExOWMwLTNjNDUtNDAxNC1hMzQ1LTBlOGQ0ZDhlNjY1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYall1RElVL3l6K2hyS2dwVTRtbVRjK0RkTkk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0zZDdRSm85WEtoYVR0MHFaTXBPa0RPZ3kwRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ091aW5vb0VFSStscjdrR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1iY0FuZ0ZpQWtQUnlRVlpXdXNlOWp5NnNjZ2NPTC9PaGE1QzZtWWF2SEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRaKzBqRy9Zb2hHSWI2OGRDWSttaUYvV2l5QmZQZVdmbmJPZEd2QUdpc3ZOQURHMnNWNFo0M1dxYXpSNlA3d1pQRThNSmdhSFNwUGx0bzh2Zmk0YkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4M3BSeEJiaWFyM1BnTmtERFU1M0NBQmZlNlE5MzVUY1h2ZkpjdS9oRlBnWUtLSkRGUDNSVEx3bVpLclkwdVVYVmtPSGlUMEJiN21OT3paSldGTm5BZz09In0sIm1lIjp7ImlkIjoiMjQzOTA2ODM0OTIzOjE1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTEwMjAwNzc0MjU0ODM3OjE1QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM5MDY4MzQ5MjM6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWm0zQUo0QllnSkQwY2tGV1Zyckh2WTh1ckhJSERpL3pvV3VRdXBtR3J4eSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwOTI1MjE0LCJsYXN0UHJvcEhhc2giOiIyb3ZxeXkifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
