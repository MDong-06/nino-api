exports.name = '/image/japcosplay';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const japcosplay = require('./data/json/japcosplay.json');
        var image = japcosplay[Math.floor(Math.random() * japcosplay.length)].trim();
        res.jsonp({
            url: image,
            count: japcosplay.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}