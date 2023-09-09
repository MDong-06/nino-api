exports.name = '/image/nhacmoingay';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const nhacmoingay = require('./data/json/nhacmoingay.json');
        var image = nhacmoingay[Math.floor(Math.random() * nhacmoingay.length)].trim();
        res.jsonp({
            url: image,
            count: nhacmoingay.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}