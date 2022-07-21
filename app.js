const ftpClient = require("ftp-client");

// FTP Configuration
const config = {
  host: 'ftp.abecode.com',
  port: 21,
  user: 'cameraroll@pruebas.abecode.com',
  password: ''
};

const options = {
  logging: 'basic'
};
client = new ftpClient(config, options);

client.connect(function (result) {
  client.upload(['./upload/**'], '/empleados', {
    baseDir: 'empleados',
    overwrite: 'older'
  }, function (result) {
    console.log(result);
  })
}
);
