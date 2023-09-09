exports.name = '/image/speedup';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const speedup = require('./data/json/speedup.json');
        var image = speedup[Math.floor(Math.random() * speedup.length)].trim();
        res.jsonp({
            url: image,
            count: speedup.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}