exports.name = '/image/remix';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const remix = require('./data/json/remix.json');
        var image = remix[Math.floor(Math.random() * remix.length)].trim();
        res.jsonp({
            url: image,
            count: remix.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}