const ayarlar = require('../ayarlar.json')
const discord = require('discord.js')
const request = require('request')

module.exports = client => {
    client.user.setStatus("online");
    const port = ayarlar.port
    const ip = ayarlar.ip

    request(`http://mcapi.us/server/status?ip=${ip}&port=${port}`, function (error, response, body) {
      if (error) return console.log('Error:', error);
          var info = JSON.parse(body);
  client.user.setActivity(`${info.players.now} Kişi EpikCraft`);
})
    setInterval(() => { 
        request(`http://mcapi.us/server/status?ip=${ip}&port=${port}`, function (error, response, body) {
            if (error) return console.log('Error:', error);
                var info = JSON.parse(body);
        client.user.setActivity(`${info.players.now} Kişi EpikCraft`);
        console.log("Online Sayısı Yenilendi")
      })
    }, 50000);
 }