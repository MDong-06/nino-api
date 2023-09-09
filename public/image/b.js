exports.name = '/image/b';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const b = require('./data/json/a.json');
        var image = b[Math.floor(Math.random() * b.length)].trim();
        res.jsonp({
            url: image,
            count: b.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}