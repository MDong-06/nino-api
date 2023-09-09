exports.name = '/image/gai';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const gai = require('./data/json/gai.json');
        var image = gai[Math.floor(Math.random() * gai.length)].trim();
        res.jsonp({
            url: image,
            count: gai.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}