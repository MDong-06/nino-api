exports.name = '/image/vdchill';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const vdchill = require('./data/json/vdchill.json');
        var image = vdchill[Math.floor(Math.random() * vdchill.length)].trim();
        res.jsonp({
            url: image,
            count: vdchill.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}