!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in o||(o[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==p.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=o[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(p.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=o[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},{id:b.name});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=o[k],m=s[k];m?j=m.exports:l&&!l.declarative?j=l.esModule:l?(h(l),m=l.module,j=m.exports):j=n(k),m&&m.importers?(m.importers.push(c),c.dependencies.push(m)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=o[a];if(c)c.declarative?m(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=n(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b.default:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=o[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);void 0!==typeof l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(q)for(var d in b)"default"!==d&&l(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,r(c,"__useDefault",{value:!0}),c}function l(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&r(a,c,d)}catch(d){return a[c]=b[c],!1}}function m(b,c){var d=o[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==p.call(c,g)&&(o[g]?m(g,c):n(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function n(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return u[a]=k(t(a.substr(6)));var b=o[a];if(!b)throw"Module "+a+" not present.";return f(a),m(a,[]),o[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var o={},p=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){q=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,u={"@empty":{}};return function(a,d,e,f){return function(g){g(function(g){for(var h={_nodeRequire:t,register:b,registerDynamic:c,get:n,set:function(a,b){u[a]=b},newModule:function(a){return a}},i=0;i<d.length;i++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[i],arguments[i]);f(h);var j=n(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)n(a[i]);return e?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],["4","7","a","b"],!0,function($__System){var require=this.require,exports=this.exports,module=this.module;$__System.registerDynamic("2",["3","4"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}),e=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},f=this&&this.__param||function(a,b){return function(c,d){b(c,d,a)}},g=a("3"),h=a("4"),i=function(){function a(a){var b=this;this.translation="",this._params={},this._translate=a,a.languageChanged.subscribe(function(){b._startTranslation()})}return Object.defineProperty(a.prototype,"key",{set:function(a){this._key=a,this._startTranslation()},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"params",{set:function(a){return"object"!=typeof a?void this._translate.logHandler.error("Params have to be an object"):(this._params=a,void this._startTranslation())},enumerable:!0,configurable:!0}),a.prototype._startTranslation=function(){var a=this;this._key&&this._translate.translate(this._key,this._params).then(function(b){return a.translation=String(b)})},a}();return d([h.Input("translate"),e("design:type",String),e("design:paramtypes",[String])],i.prototype,"key",null),d([h.Input("translateParams"),e("design:type",Object),e("design:paramtypes",[Object])],i.prototype,"params",null),i=d([h.Component({selector:"[translate]",template:"{{translation}}"}),f(0,h.Inject(g.TranslateService)),e("design:paramtypes",[g.TranslateService])],i),b.TranslateComponent=i,c.exports}),$__System.registerDynamic("5",["6","4","7"],!0,function(a,b,c){"use strict";var d=(this||self,this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}()),e=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},f=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},g=this&&this.__param||function(a,b){return function(c,d){b(c,d,a)}},h=a("6"),i=a("4"),j=a("7"),k=function(){function a(a,b){this.path="i18n/",this.extension=".json",a&&(this.path=a.replace(/\/+$/,"")+"/"),b&&(this.extension=b)}return a}();b.TranslateLoaderJsonConfig=k;var l=function(a){function b(b,c){var d=a.call(this)||this;return d._http=b,d._config=c,d}return d(b,a),b.prototype.load=function(a){var b=this;return new Promise(function(c,d){var e=b._config.path+a+b._config.extension;b._http.get(e).subscribe(function(a){if(200===a.status){var e={};b.flattenTranslations(e,a.json()),c(e)}else d("StatusCode: "+a.status)},function(a){d(a.message)})})},b.prototype.flattenTranslations=function(a,b,c){void 0===c&&(c="");for(var d in b)Array.isArray(b[d])?a[c+d]=b[d].filter(function(a){return"string"==typeof a}).join(""):"object"==typeof b[d]?this.flattenTranslations(a,b[d],c+d+"."):"string"==typeof b[d]&&(a[c+d]=b[d])},b}(h.TranslateLoader);return l=e([i.Injectable(),g(0,i.Inject(j.Http)),g(1,i.Inject(k)),f("design:paramtypes",[j.Http,k])],l),b.TranslateLoaderJson=l,c.exports}),$__System.registerDynamic("8",["3","4"],!0,function($__require,exports,module){"use strict";var define,global=this||self,GLOBAL=global,__decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__param=this&&this.__param||function(a,b){return function(c,d){b(c,d,a)}},TranslateService_1=$__require("3"),core_1=$__require("4"),TranslatePipe=TranslatePipe_1=function(){function TranslatePipe(a){var b=this;this._translation="",this._translate=a,a.languageChanged.subscribe(function(){b._startTranslation()})}return TranslatePipe._parseParams=function(arg){try{var o=eval("("+arg+")");if("object"==typeof o)return o}catch(a){}return{}},TranslatePipe.prototype.transform=function(a,b){void 0===b&&(b=[]);var c={};return b[0]&&("string"==typeof b[0]?(c=TranslatePipe_1._parseParams(b[0]),Object.keys(c).length||this._translate.logHandler.error("'"+b[0]+"' could not be parsed to object")):"object"==typeof b[0]&&(c=b[0])),this._translated&&this._promise&&(this._translated.key!==a||JSON.stringify(this._translated.params)!==JSON.stringify(c))&&(this._promise=null),this._promise||(this._translated={key:a,params:c},this._startTranslation()),this._translation},TranslatePipe.prototype._startTranslation=function(){var a=this;this._translated&&this._translated.key&&(this._promise=this._translate.translate(this._translated.key,this._translated.params),this._promise.then(function(b){return a._translation=String(b)}))},TranslatePipe}();TranslatePipe=TranslatePipe_1=__decorate([core_1.Pipe({name:"translate",pure:!1}),__param(0,core_1.Inject(TranslateService_1.TranslateService)),__metadata("design:paramtypes",[TranslateService_1.TranslateService])],TranslatePipe),exports.TranslatePipe=TranslatePipe;var TranslatePipe_1;return module.exports}),$__System.registerDynamic("9",[],!0,function(a,b,c){"use strict";var d=(this||self,function(){function a(b){var c=b.defaultLang,d=void 0===c?"en":c,e=b.providedLangs,f=void 0===e?["en"]:e,g=b.detectLanguageOnStart,h=void 0===g||g;this.defaultLang=f.indexOf(d)>-1?d:f[0],this.providedLangs=f,this.detectLanguageOnStart=h,this.navigatorLanguages=function(){var b=a.navigator;return b.languages instanceof Array?Array.prototype.slice.call(b.languages):"string"==typeof b.languages?[String(b.languages)]:"string"==typeof b.language?[b.language]:[]}()}return a.prototype.langProvided=function(a,b){void 0===b&&(b=!1);var c,d=!1,e=function(a){var b=/^([A-Za-z]{2})(?:[\.\-_\/]?([A-Za-z]{2}))?$/;return a.match(b)?a.replace(b,function(a,b,c){return void 0===c&&(c=""),b=b.toLowerCase(),c=c.toUpperCase(),c?b+"-"+c:b}):""},f=this.providedLangs.map(e);return a=e(a),0===a.length?d:(c=f.indexOf(a),c>-1?d=this.providedLangs[c]:b||(a=a.substr(0,2),c=f.indexOf(a),c>-1?d=this.providedLangs[c]:(c=f.map(function(a){return a.substr(0,2)}).indexOf(a),c>-1&&(d=this.providedLangs[c]))),d)},a}());return d.navigator=window&&window.navigator?window.navigator:{},b.TranslateConfig=d,c.exports}),$__System.registerDynamic("6",[],!0,function(a,b,c){"use strict";var d=(this||self,function(){function a(){}return a}());return b.TranslateLoader=d,c.exports}),$__System.registerDynamic("3",["9","6","4","a","b"],!0,function($__require,exports,module){"use strict";var define,global=this||self,GLOBAL=global,__decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__param=this&&this.__param||function(a,b){return function(c,d){b(c,d,a)}},TranslateConfig_1=$__require("9"),TranslateLoader_1=$__require("6"),core_1=$__require("4"),Observable_1=$__require("a");$__require("b"),exports.TranslateLogHandler={debug:function(){},error:function(a){return console&&console.error&&console.error(a)},info:function(){}};var TranslateService=function(){function TranslateService(a,b,c){var d=this;if(this._loadedLangs={},this._translations={},this._config=a,this._loader=b,this.logHandler=c,this._lang=a.defaultLang,a.detectLanguageOnStart){var e=this.detectLang(a.navigatorLanguages);e&&(this._lang=String(e),c.info("Language "+e+" got detected"))}this.languageChanged=new Observable_1.Observable(function(a){return d._languageChangedObserver=a}).share()}return Object.defineProperty(TranslateService.prototype,"lang",{get:function(){return this._lang},set:function(a){var b=this._config.langProvided(a,!0);if("string"==typeof b)return this._lang=b,this.logHandler.info("Language changed to "+b),void(this._languageChangedObserver&&this._languageChangedObserver.next(this._lang));throw new Error("Language not provided")},enumerable:!0,configurable:!0}),TranslateService.prototype.detectLang=function(a){var b,c=!1;for(b=0;b<a.length&&!(c=this._config.langProvided(a[b],!0));b++);if(!c)for(b=0;b<a.length&&!(c=this._config.langProvided(a[b]));b++);return c},TranslateService.prototype.waitForTranslation=function(a){void 0===a&&(a=this._lang);var b=this._config.langProvided(a,!0);return b?(a=String(b),this._loadLang(a)):Promise.reject("Language not provided")},TranslateService.prototype.translate=function(a,b,c){var d=this;return void 0===b&&(b={}),void 0===c&&(c=this._lang),new Promise(function(e){if(c!==d._lang){var f=d._config.langProvided(c,!0);if(!f)return void e(a);c=String(f)}d._loadLang(c).then(function(){e(d.instant(a,b,c))},function(){e(a)})})},TranslateService.prototype.instant=function(a,b,c){var d=this;if(void 0===b&&(b={}),void 0===c&&(c=this._lang),"string"==typeof a)return this.instant([a],b,c)[0];if(c!==this._lang){var e=this._config.langProvided(c,!0);e&&(c=String(e))}for(var f,g=[],h=a.length;h--;)this._translations[c]&&this._translations[c][a[h]]?(f=this._translations[c][a[h]],f=f.replace(/\[\[([\sA-Za-z0-9_.,=:-]*)]]/g,function(a,e){return d._translateReferenced(a,e,b,c)}),f=f.replace(/{{\s*(.*?)\s*}}/g,function(a,c){try{return d._parse(c,b)||""}catch(b){return b&&b.message&&b.message.indexOf("is not defined")===-1&&d.logHandler.error("Parsing error for expression '"+a+"'"),""}}),g.unshift(f)):(this.logHandler.info("Translation for '"+a[h]+"' in language "+c+" not found"),g.unshift(a[h]));return g},TranslateService.prototype._loadLang=function(a){var b=this;return this._loadedLangs[a]||(this._loadedLangs[a]=new Promise(function(c,d){b._loader.load(a).then(function(d){b._translations[a]=d,b.logHandler.info("Language "+a+" got loaded"),c()},function(c){b.logHandler.error("Language "+a+" could not be loaded ("+c+")"),d(c)})})),this._loadedLangs[a]},TranslateService.prototype._parse=function(expression,__context){var func=[],varName;if(func.push("(function() {"),Array.isArray(__context))this.logHandler.error("Parameters can not be an array.");else for(varName in __context)__context.hasOwnProperty(varName)&&("__context"!==varName&&varName.match(/[a-zA-Z_][a-zA-Z0-9_]*/)?func.push("try { var "+varName+" = __context['"+varName+"']; } catch(e) {}"):this.logHandler.error("Parameter '"+varName+"' is not allowed."));return func.push("return ("+expression+"); })()"),eval(func.join("\n"))},TranslateService.prototype._referencedError=function(a,b,c,d){var e="Parse error unexpected "+b;return void 0!==d&&(e+=" at pos "+(d+3)),c&&(e+=" expected "+c),this.logHandler.error(e+" in '"+a+"'"),""},TranslateService.prototype._getParam=function(a,b){var c=b.indexOf(".");if(c===-1)return a.hasOwnProperty(b)?a[b]:void 0;var d=b.substr(0,c);return a.hasOwnProperty(d)&&"object"==typeof a[d]?this._getParam(a[d],b.substr(c+1)):void 0},TranslateService.prototype._translateReferenced=function(a,b,c,d){var e,f,g,h,i=this,j="wait_key",k={},l=function(b){void 0===b&&(b=!0),b&&!g?"object"!=typeof i._getParam(c,h)?i.logHandler.error("Only objects can be passed as params in '"+a+"'"):k=i._getParam(c,h):b?k[g]=i._getParam(c,h):k[g]=i._getParam(c,g)};for(e=0;e<b.length;e++)switch(j){case"wait_key":if(b[e].match(/\s/));else{if(!b[e].match(/[A-Za-z0-9_.-]/))return this._referencedError(a,"character","key",e);j="read_key",f=b[e]}break;case"read_key":if(b[e].match(/[A-Za-z0-9_.-]/))f+=b[e];else if(":"===b[e])j="wait_param";else{if(!b[e].match(/\s/))return this._referencedError(a,"character","colon or end",e);j="key_readed"}break;case"key_readed":if(b[e].match(/\s/));else{if(":"!==b[e])return this._referencedError(a,"character","colon or end",e);j="wait_param"}break;case"wait_param":if(b[e].match(/\s/));else if(b[e].match(/[A-Za-z0-9_]/))j="read_param_key",g=b[e];else{if("="!==b[e])return this._referencedError(a,"character","parameter",e);if(Object.keys(k).length>0)return this.logHandler.error("Parse error only first parameter can be passed as params in '"+a+"'"),"";j="wait_getter"}break;case"read_param_key":if(b[e].match(/[A-Za-z0-9_]/))g+=b[e];else if("="===b[e])j="wait_getter";else if(","===b[e])l(!1),j="wait_param";else{if(!b[e].match(/\s/))return this._referencedError(a,"character","comma, equal sign or end",e);j="param_key_readed"}break;case"param_key_readed":if(b[e].match(/\s/));else if("="===b[e])j="wait_getter";else{if(","!==b[e])return this._referencedError(a,"character","comma, equal sign or end",e);l(!1),j="wait_param"}break;case"wait_getter":if(b[e].match(/\s/));else{if(!b[e].match(/[A-Za-z0-9_]/))return this._referencedError(a,"character","getter",e);j="read_getter",h=b[e]}break;case"read_getter":if(b[e].match(/[A-Za-z0-9_.]/))h+=b[e];else if(b[e].match(/\s/))j="getter_readed";else{if(","!==b[e])return this._referencedError(a,"character","comma or end",e);l(),j="wait_param"}break;case"getter_readed":if(b[e].match(/\s/));else{if(","!==b[e])return this._referencedError(a,"character","comma or end",e);l(),j="wait_param"}}switch(j){case"param_key_readed":case"read_param_key":l(!1);break;case"getter_readed":case"read_getter":l();break;case"wait_key":return this._referencedError(a,"end","key");case"wait_param":return this._referencedError(a,"end","parameter");case"wait_getter":return this._referencedError(a,"end","getter")}return String(this.instant(f,k,d))},TranslateService}();return TranslateService=__decorate([core_1.Injectable(),__param(0,core_1.Inject(TranslateConfig_1.TranslateConfig)),__param(1,core_1.Inject(TranslateLoader_1.TranslateLoader)),__param(2,core_1.Inject(exports.TranslateLogHandler)),__metadata("design:paramtypes",[TranslateConfig_1.TranslateConfig,TranslateLoader_1.TranslateLoader,Object])],TranslateService),exports.TranslateService=TranslateService,module.exports}),$__System.registerDynamic("1",["2","9","6","5","8","3","4","7"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}var e=(this||self,this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}),f=a("2"),g=a("9"),h=a("6"),i=a("5"),j=a("8"),k=a("3"),l=a("4"),m=a("7");d(a("3")),d(a("8")),d(a("2")),d(a("9")),d(a("6")),d(a("5"));var n=function(){function a(){}return a}();return n=e([l.NgModule({declarations:[j.TranslatePipe,f.TranslateComponent],exports:[j.TranslatePipe,f.TranslateComponent],imports:[m.HttpModule],providers:[{provide:g.TranslateConfig,useValue:new g.TranslateConfig({})},{provide:i.TranslateLoaderJsonConfig,useValue:new i.TranslateLoaderJsonConfig},{provide:h.TranslateLoader,useClass:i.TranslateLoaderJson},{provide:k.TranslateLogHandler,useValue:k.TranslateLogHandler},k.TranslateService]})],n),b.TranslatorModule=n,b.TRANSLATE_PROVIDERS=[{provide:g.TranslateConfig,useValue:new g.TranslateConfig({})},{provide:i.TranslateLoaderJsonConfig,useValue:new i.TranslateLoaderJsonConfig},{provide:h.TranslateLoader,useClass:i.TranslateLoaderJson},{provide:k.TranslateLogHandler,useValue:k.TranslateLogHandler},k.TranslateService],c.exports})})(function(a){if("function"==typeof define&&define.amd)define(["@angular/core","@angular/http","rxjs/Observable","rxjs/add/operator/share"],a);else{if("object"!=typeof module||!module.exports||"function"!=typeof require)throw new Error("Module must be loaded as AMD or CommonJS");module.exports=a(require("@angular/core"),require("@angular/http"),require("rxjs/Observable"),require("rxjs/add/operator/share"))}});
//# sourceMappingURL=angular2-translator.js.map