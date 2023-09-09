exports.name = '/image/vdspeed';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const vdspeed = require('./data/json/vdspeed.json');
        var image = vdspeed[Math.floor(Math.random() * vdspeed.length)].trim();
        res.jsonp({
            url: image,
            count: vdspeed.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}