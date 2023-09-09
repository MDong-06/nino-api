exports.name = '/image/trung';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const trung = require('./data/json/trung.json');
        var image = trung[Math.floor(Math.random() * trung.length)].trim();
        res.jsonp({
            url: image,
            count: trung.length,
            author: 'MạnhG'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}