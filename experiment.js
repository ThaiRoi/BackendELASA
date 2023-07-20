//get all 400k documents, may break everything but that's okay omegalul
require('./global.js');
require('./connection.js');

const rawSubtitle = require('./schema/RawSubtitle');


 const findData = async () => {
    const data = await rawSubtitle.find({_id: "64b8b784b38ea84f9b82377f"}).exec();
    console.log(data);
    return data;
}

findData();

