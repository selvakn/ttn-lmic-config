const ttn = require('ttn');

const appID = process.env.APP_ID;
const accessKey = process.env.ACCESS_KEY;
const deviceId = process.env.DEVICE_ID;

ttn.application(appID, accessKey)
  .then(app => app.device(deviceId))
  .then(d => {
    let splitAsHex = v => v.split(/(?=(?:..)*$)/).map(e => `0x${e.toUpperCase()}`);

    console.log('\n ******** Config ********');
    console.log(`static const u1_t PROGMEM APPEUI[8]={ ${splitAsHex(d.appEui).reverse().join(', ')} };`);
    console.log(`static const u1_t PROGMEM DEVEUI[8]={ ${splitAsHex(d.devEui).reverse().join(', ')} };`);
    console.log(`static const u1_t PROGMEM APPKEY[16] = { ${splitAsHex(d.appKey).join(', ')} };`);
  })
  .catch(function (err) {
    console.error(err);
    process.exit(1);
  })
