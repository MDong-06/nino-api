exports.name = '/image/ai1';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const ai1 = require('./data/json/ai1.json');
        var image = ai1[Math.floor(Math.random() * ai1.length)].trim();
        res.jsonp({
            url: image,
            count: ai1.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}