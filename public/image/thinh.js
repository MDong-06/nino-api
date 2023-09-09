exports.name = '/image/thinh';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const thinh = require('./data/json/thinh.json');
        var image = thinh[Math.floor(Math.random() * thinh.length)].trim();
        res.jsonp({
            url: image,
            count: thinh.length,
            author: 'MạnhG'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}