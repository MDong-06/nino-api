exports.name = '/image/tw';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const tw = require('./data/json/tw.json');
        var image = tw[Math.floor(Math.random() * tw.length)].trim();
        res.jsonp({
            url: image,
            count: tw.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}