/*__Class__*/
class NatureRemoClient {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  fetchDevices() {
    const url = 'https://api.nature.global/1/devices';
    const options = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json;',
        'Authorization': 'Bearer ' + this.accessToken,
      },
    };

    const response = UrlFetchApp.fetch(url, options);
    return JSON.parse(response);
  }

  getLatestSensorValues() {
    const devices = this.fetchDevices();
    const events = devices[0].newest_events;

    return {
      te: events.te?.val ?? null,  // 温度
      hu: events.hu?.val ?? null,  // 湿度
      il: events.il?.val ?? null,  // 照度
    };
  }

  fetchAppliances() {
    const url = 'https://api.nature.global/1/appliances';
    const options = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json;',
        'Authorization': 'Bearer ' + this.accessToken,
      },
    };

    const response = UrlFetchApp.fetch(url, options);
    return JSON.parse(response);
  }
}
/*__Class__*/


function main() {
  const client = new NatureRemoClient(REMO_TOKENS);

  const sensorValues = client.getLatestSensorValues();
  console.log(sensorValues);
}

