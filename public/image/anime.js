exports.name = '/image/anime';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const anime = require('./data/json/anime.json');
        var image = anime[Math.floor(Math.random() * anime.length)].trim();
        res.jsonp({
            url: image,
            count: anime.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}