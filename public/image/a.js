exports.name = '/image/a';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const a = require('./data/json/a.json');
        var image = a[Math.floor(Math.random() * a.length)].trim();
        res.jsonp({
            url: image,
            count: a.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}