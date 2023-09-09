exports.name = '/image/ngoctrinh';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const ngoctrinh = require('./data/json/ngoctrinh.json');
        var image = ngoctrinh[Math.floor(Math.random() * ngoctrinh.length)].trim();
        res.jsonp({
            url: image,
            count: ngoctrinh.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}