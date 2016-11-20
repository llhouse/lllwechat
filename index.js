var wechat = require('wechat');
var express = require('express');

var app = express();

var config = {
  token: 'wechatDemo',
  appid: 'wx5f712c338b0eed99',
  encodingAESKey: '9uWFEsvNbVkB9v1VZxrfk7JrCUB24kk1WgNNrlT6FvD'
};

app.use(express.query());

app.use('/wechat', wechat(config, function (req, res, next) {

}));