exports.name = '/image/lebong';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const lebong = require('./data/json/lebong.json');
        var image = lebong[Math.floor(Math.random() * lebong.length)].trim();
        res.jsonp({
            url: image,
            count: lebong.length,
            author: 'MạnhG'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}