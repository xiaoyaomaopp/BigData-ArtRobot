/**
 * Created by yneos on 2017/1/11.
 */
var MyCrawler =  require("../lib");
var c_bbc = {
    init:function(){
        var cw = MyCrawler.createCrawler();
        return cw.start("c_bbc");
    }
}
module.exports = c_bbc;