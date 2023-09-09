exports.name = '/image/nhac';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const nhac = require('./data/json/nhac.json');
        var image = nhac[Math.floor(Math.random() * nhac.length)].trim();
        res.jsonp({
            url: image,
            count: nhac.length,
            author: 'MạnhG'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}