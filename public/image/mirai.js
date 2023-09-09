exports.name = '/image/mirai';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const mirai = require('./data/json/mirai.json');
        var image = mirai[Math.floor(Math.random() * mirai.length)].trim();
        res.jsonp({
            url: image,
            count: mirai.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}