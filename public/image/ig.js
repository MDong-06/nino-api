exports.name = '/image/ig';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const ig = require('./data/json/ig.json');
        var image = ig[Math.floor(Math.random() * ig.length)].trim();
        res.jsonp({
            url: image,
            count: ig.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}