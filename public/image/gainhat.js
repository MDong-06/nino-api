exports.name = '/image/gainhat';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const gainhat = require('./data/json/gainhat.json');
        var image = gainhat[Math.floor(Math.random() * gainhat.length)].trim();
        res.jsonp({
            url: image,
            count: gainhat.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}