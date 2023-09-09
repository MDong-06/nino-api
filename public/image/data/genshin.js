exports.name = '/image/genshin';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const genshin = require('./data/json/genshin.json');
        var image = genshin[Math.floor(Math.random() * genshin.length)].trim();
        res.jsonp({
            url: image,
            count: genshin.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}