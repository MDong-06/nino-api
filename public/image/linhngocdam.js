exports.name = '/image/linhngocdam';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const linhngocdam = require('./data/json/linhngocdam.json');
        var image = linhngocdam[Math.floor(Math.random() * linhngocdam.length)].trim();
        res.jsonp({
            url: image,
            count: linhngocdam.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}