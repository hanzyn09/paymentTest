const crypto = require('crypto');
const appKey = "858e1a20-d771-402b-b282-18c1b202f60d";
const timeSt = "20210825011344";

const hsKey = (str) =>{
    const key = appKey + timeSt;
    var hmac = crypto.createHmac("sha512", new Buffer.from(key, 'utf-8'));
    var signed = hmac.update(new Buffer.from(str, 'utf-8')).digest("base64");
    console.log(signed);
    return signed
}
hsKey('hello javascript');