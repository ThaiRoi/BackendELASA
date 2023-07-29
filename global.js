global.mongoose = require('mongoose');

global.apiKey = 'AIzaSyDil_bOsqhaiAFE3wNeraXB5wQrq_vsLBc'

global.String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
  };