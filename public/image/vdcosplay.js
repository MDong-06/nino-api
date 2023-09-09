exports.name = '/image/vdcosplay';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const vdcosplay = require('./data/json/vdcosplay.json');
        var image = vdcosplay[Math.floor(Math.random() * vdcosplay.length)].trim();
        res.jsonp({
            url: image,
            count: vdcosplay.length,
            author: 'Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}