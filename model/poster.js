/**
 * Created by yangxun on 16/7/6.
 */
var sequelize = require('../common/db-helper'),
    Sequelize = require('sequelize'),
    ObjectId = require('../common/objectid').ObjectID;
/*
* 海报model
* */
var params = {
    id: {
        type: Sequelize.STRING(24),
        primaryKey: true,
        //defaultValue: function(){return new ObjectId().toHexString();}
    },
    layout: Sequelize.STRING(24),//页面布局类型，其值为mobile或者pc
    title: Sequelize.STRING(128), //页面标题
    userId: Sequelize.STRING,//创建人ID
    pathname: {
        type: Sequelize.STRING(255),
        unique: true
    }, //页面路径名，需要确保唯一性
    background: Sequelize.STRING,
    //backgroundImageName: Sequelize.STRING(64), //背景图名称
    //backgroundImageData: Sequelize.TEXT, //背景图base64数据
    backgroundColor: Sequelize.STRING(24), //背景颜色
    shareImage: Sequelize.STRING(255), //分享图标地址
    shareTitle: Sequelize.STRING(128), //分享标题
    shareDesc: Sequelize.STRING(255), //分享描述
    statistics: Sequelize.TEXT, //统计代码
    elements: Sequelize.TEXT,
    html: Sequelize.TEXT,
    createDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updateDate: { type: Sequelize.DATE }
};


var Poster = sequelize.define('poster', params,{
    indexes: [
        {
            unique: true,
            fields: ['id']
        }
    ],
    freezeTableName: true // Model tableName will be the same as the model name
});

//创建表
Poster.sync({force: false});

module.exports = {
    Poster,
    Params: Object.keys(params),
};