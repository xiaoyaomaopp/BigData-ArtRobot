/**
 * Created by yneos on 2017/1/1.
 * 安居客
 */
var conf = {
    //【秒】【分】【小时】【日】【月】【周】 *所有 ?不指定 -区间 */5每5
    //cron:"00 00 08 1,10,20 * *",//每月1号,10号,20号早上8:30
    cron:false,
    logLevel: 'debug',//debug|info|warn|error
    dbUrl: "mongodb://10.82.0.1/crawlerNew",//'mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/mydatabase'
    crawler: {
        url: "http://www.bbc.co.uk/ahistoryoftheworld/objects/CkcC4hEsTa-alS5gtLG3vg",
        //url: "http://www.bbc.co.uk/ahistoryoftheworld/exploreraltflash/",
        interval: 3 * 1000
    },
    extractors: [
        {handler: "./c_bbc/e_fbDemo.js"}
    ]
}
module.exports = conf;