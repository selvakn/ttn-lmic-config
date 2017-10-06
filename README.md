# ttn-lmic-config
TTN LMIC (Arduino) Config Generator

## Steps to run:

  $ `yarn`

  $ `APP_ID=xxxx DEVICE_ID=xxxx ACCESS_KEY=xxxx node index.js`

## Outputs:

```
static const u1_t PROGMEM APPEUI[8]={ 0xYY, 0xYY, .... };
static const u1_t PROGMEM DEVEUI[8]={ 0xYY, ... 0xF8, 0x03, 0x00 };
static const u1_t PROGMEM APPKEY[16] = { 0x91, 0x58, .... };

```

