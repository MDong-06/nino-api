exports.name = '/image/test1';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const test1 = require('./data/json/test1.json');
        var image = test1[Math.floor(Math.random() * test1.length)].trim();
        res.jsonp({
            url: image,
            count: test1.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}