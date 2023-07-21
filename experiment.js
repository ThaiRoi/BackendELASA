//get all 400k documents, may break everything but that's okay omegalul
require('./global.js');
require('./connection.js');

const rawSubtitle = require('./schema/RawSubtitle');


 const findData = async () => {
    const data = await rawSubtitle.find({"captions.lang" : "en"}).limit(3).skip(0).exec();
    console.log(data);
    //
    return data;
}

findData();

