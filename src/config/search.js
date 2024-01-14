"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEARCH_ENGINES_DEFAULT = exports.SEARCH_ENGINES = void 0;
const SEARCH_ENGINES = exports.SEARCH_ENGINES = [{
  name: 'Google',
  uri: 'https://www.google.com/search?q='
}, {
  name: 'Bing',
  uri: 'https://www.bing.com/search?q='
},
//{name: 'Github', uri: ' https://github.com/search?q='},
/*{name: '360', uri: 'https://www.so.com/s?ie=utf-8&q='},*/
{
  name: 'Baidu',
  uri: 'https://www.baidu.com/#ie=utf-8&wd='
}
//{name: 'Yahoo', uri: 'https://search.yahoo.com/search?p='},
];
const SEARCH_ENGINES_DEFAULT = exports.SEARCH_ENGINES_DEFAULT = 'Google';