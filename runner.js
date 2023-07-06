const build = { Debug:"debug",Nightly:"nightly",Prod:"prod" }



  const details = {
    dateRecieved: Date.now(),
    dateExpired: sampleExpiration(),
    emailAddress,
    channel: "SMS",
    success: true,
    message: "OTP sent to user",
    otpId: otpValue,
  };

