"use strict";

exports.__esModule = true;
exports.DataSourceTypeMtop = void 0;
var DataSourceTypeMtop = {
  type: 'mtop',
  schema: {
    type: 'object',
    properties: {
      options: {
        type: 'object',
        properties: {
          uri: {
            title: 'api'
          },
          v: {
            title: 'v',
            type: 'string'
          },
          appKey: {
            title: 'appKey',
            type: 'string'
          },
          dataType: {
            title: 'dataType',
            type: 'string',
            "enum": ['jsonp', 'originaljsonp', 'json']
          }
        }
      }
    }
  }
};
exports.DataSourceTypeMtop = DataSourceTypeMtop;