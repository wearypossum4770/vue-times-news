// https://docs.aws.amazon.com/pinpoint/latest/developerguide/send-validate-otp.html
// https://www.twilio.com/docs/verify/preventing-toll-fraud
// https://www.twilio.com/code-exchange/one-time-passcode-verification-otp
import twilio from 'twilio';
import express from 'express'
import cors from 'cors';
import database from './database.json' assert {type: 'json'}

const app = express()
const PORT = process.env.PORT || 6633
const sampleExpiration = () => Date.now() + 120_000
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountPhoneNum = process.env.TWILIO_FROM_NUMBER;

const client = () => twilio(accountSid, authToken);
const retryTimeouts = Object.freeze(new Map([
  ['1', 2,], [1, 2,], ['2', 5,],[2, 5,],['3', 20,],[3, 20,],['4', 40,],[4, 40,],['5', 60,],[5, 60,],['6', 80,],[6, 80,],['7', 120,],[7, 120,],
]));

const getRetryTimeout = ({ attemptNumber = null }) =>retryTimeouts.get(attemptNumber) ?? 1_440;
const message = async ({recipientNumber = '', oneTimePasscode = "123"}) => await client.messages
.create({
   body: `Your vue-times-news security code is ${oneTimePasscode}`,
   from: accountPhoneNum,
   to: `+${recipientNumber || '2282382768'}`
 })

app.use(cors()).use(express.urlencoded({ extended: true })).use(express.json());
app.post('/send-otp-to-email', async (req, res) => {

})
app.post('/send-otp-to-sms', async (req, res)  => {
  const failure = {
    message: "One Time Passwords do not match",

  }
  const { validOTP } = database;
  if ( validOTP !== oneTimePasscode) return res.json(failure)
  const details={ 
    "dateRecieved": Date.now(), 
    "dateExpired": sampleExpiration(),
    emailAddress,
    channel: "SMS",
    "success": true, 
    "message":"OTP sent to user", 
    "otpId": otpValue
   }
  const expirationTime = sampleExpiration();
})
app.post('/verify-retry', async (req, res) => {

})
// app.listen(PORT, function(err){
//   if (err) console.log(err);
//   console.log("Server listening on PORT", PORT);
// });
import crypto from 'crypto'
console.log(crypto.randomUUID())
console.log(PORT)
