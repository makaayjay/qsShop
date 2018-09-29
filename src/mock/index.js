let shops=require('./shops.json')
let category=require('./index_category.json')
let shopinfo=require('./data.json')
const Mock = require('mockjs');
Mock.mock('/index_category',shops)
Mock.mock('/getshopinfo',shopinfo)