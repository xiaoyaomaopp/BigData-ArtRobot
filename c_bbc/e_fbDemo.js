/**
 * Created by yneos on 2017/1/1.
 */
var Common = require("../common/Common.js");
var extractor = {
    //表名
    name: 'bbc.histroy',//板块
    //  网页是否由它处理的依据，如匹配区域网址 http[s]://shanghai.anjuke.com/market[/]...
    target: /^http:\/\/www\.bbc\.co\.uk\/ahistoryoftheworld\/objects/g,
    //target: /^http:\/\/shanghai\.anjuke\.com\/market\/$/i,
    //正则，加入爬取队列，只为寻找target
    //helpUrl:/^http:\/\/www\.datayuan\.cn/g,
    schema: {
        id:String,
        name:String,
        title: String,
        author:String,
        style:String,
        culture:String,
        period:String,
        material:String,
        size:String,
        theme:String,
        location:String,
        color:String,
        description:String
    },
    //数据唯一标识(字段值连接后md5存放于__k)，若数据已存在不做更新
    keys: ["id","name"],
    //model: null,//数据模型对象，运行时注入
    //crawler: null,//爬虫对象，运行时注入
    //mongoose: null,//数据库对象，运行时注入
    times: 0,
    //无返回值框架不会保存，可使用new this.model(data)自行操作
    handler: function ($, queueItem, responseBuffer, response) {
        var idArr =queueItem.url.split("/");
        var id = idArr[idArr.length-1];
        console.log(id)
        var title = $("#blq-content h1").html();

        var location = $("#blq-content .row #explore .shadowed-box-mid dl span").html();
        console.log(location)
        var description = $("#blq-content .content .object-description").html()
    }
}

module.exports = extractor;