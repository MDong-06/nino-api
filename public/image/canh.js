exports.name = '/image/canh';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const canh = require('./data/json/canh.json');
        var image = canh[Math.floor(Math.random() * canh.length)].trim();
        res.jsonp({
            url: image,
            count: canh.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}