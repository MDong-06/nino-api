exports.name = '/image/ai2';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const ai2 = require('./data/json/ai2.json');
        var image = ai2[Math.floor(Math.random() * ai2.length)].trim();
        res.jsonp({
            url: image,
            count: ai2.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}