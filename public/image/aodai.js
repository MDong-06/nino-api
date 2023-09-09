exports.name = '/image/aodai';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const aodai = require('./data/json/aodai.json');
        var image = aodai[Math.floor(Math.random() * aodai.length)].trim();
        res.jsonp({
            url: image,
            count: aodai.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}