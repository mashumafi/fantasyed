/*!
 * Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(t){var r={"&nbsp;":" ","&iexcl;":"¡","&cent;":"¢","&pound;":"£","&curren;":"€","&yen;":"¥","&brvbar;":"Š","&sect;":"§","&uml;":"š","&copy;":"©","&ordf;":"ª","&laquo;":"«","&not;":"¬","&shy;":"­","&reg;":"®","&macr;":"¯","&deg;":"°","&plusmn;":"±","&sup2;":"²","&sup3;":"³","&acute;":"Ž","&micro;":"µ","&para;":"¶","&middot;":"·","&cedil;":"ž","&sup1;":"¹","&ordm;":"º","&raquo;":"»","&frac14;":"Œ","&frac12;":"œ","&frac34;":"Ÿ","&iquest;":"¿","&Agrave;":"À","&Aacute;":"Á","&Acirc;":"Â","&Atilde;":"Ã","&Auml;":"Ä","&Aring;":"Å","&AElig;":"Æ","&Ccedil;":"Ç","&Egrave;":"È","&Eacute;":"É","&Ecirc;":"Ê","&Euml;":"Ë","&Igrave;":"Ì","&Iacute;":"Í","&Icirc;":"Î","&Iuml;":"Ï","&ETH;":"Ð","&Ntilde;":"Ñ","&Ograve;":"Ò","&Oacute;":"Ó","&Ocirc;":"Ô","&Otilde;":"Õ","&Ouml;":"Ö","&times;":"×","&Oslash;":"Ø","&Ugrave;":"Ù","&Uacute;":"Ú","&Ucirc;":"Û","&Uuml;":"Ü","&Yacute;":"Ý","&THORN;":"Þ","&szlig;":"ß","&agrave;":"à","&aacute;":"á","&acirc;":"â","&atilde;":"ã","&auml;":"ä","&aring;":"å","&aelig;":"æ","&ccedil;":"ç","&egrave;":"è","&eacute;":"é","&ecirc;":"ê","&euml;":"ë","&igrave;":"ì","&iacute;":"í","&icirc;":"î","&iuml;":"ï","&eth;":"ð","&ntilde;":"ñ","&ograve;":"ò","&oacute;":"ó","&ocirc;":"ô","&otilde;":"õ","&ouml;":"ö","&divide;":"÷","&oslash;":"ø","&ugrave;":"ù","&uacute;":"ú","&ucirc;":"û","&uuml;":"ü","&yacute;":"ý","&thorn;":"þ","&yuml;":"ÿ","&quot;":'"',"&lt;":"<","&gt;":">","&apos;":"'","&minus;":"−","&circ;":"ˆ","&tilde;":"˜","&Scaron;":"Š","&lsaquo;":"‹","&OElig;":"Œ","&lsquo;":"‘","&rsquo;":"’","&ldquo;":"“","&rdquo;":"”","&bull;":"•","&ndash;":"–","&mdash;":"—","&trade;":"™","&scaron;":"š","&rsaquo;":"›","&oelig;":"œ","&Yuml;":"Ÿ","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&sbquo;":"‚","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&hellip;":"…","&permil;":"‰","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&euro;":"€","&image;":"ℑ","&weierp;":"℘","&real;":"ℜ","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"};var e=function(t){if(!~t.indexOf("&"))return t;for(var e in r){t=t.replace(new RegExp(e,"g"),r[e])}t=t.replace(/&#x(0*[0-9a-f]{2,5});?/gi,function(t,r){return String.fromCharCode(parseInt(+r,16))});t=t.replace(/&#([0-9]{2,4});?/gi,function(t,r){return String.fromCharCode(+r)});t=t.replace(/&amp;/g,"&");return t};var i=function(t){t=t.replace(/&/g,"&amp;");t=t.replace(/'/g,"&#39;");for(var e in r){t=t.replace(new RegExp(r[e],"g"),e)}return t};t.entities={encode:i,decode:e};var s={"document.cookie":"","document.write":"",".parentNode":"",".innerHTML":"","window.location":"","-moz-binding":"","<!--":"&lt;!--","-->":"--&gt;","<![CDATA[":"&lt;![CDATA["};var n={"javascript\\s*:":"","expression\\s*(\\(|&\\#40;)":"","vbscript\\s*:":"","Redirect\\s+302":""};var a=[/%0[0-8bcef]/g,/%1[0-9a-f]/g,/[\x00-\x08]/g,/\x0b/g,/\x0c/g,/[\x0e-\x1f]/g];var o=["javascript","expression","vbscript","script","applet","alert","document","write","cookie","window"];t.xssClean=function(r,e){if(typeof r==="object"){for(var i in r){r[i]=t.xssClean(r[i])}return r}r=c(r);r=r.replace(/\&([a-z\_0-9]+)\=([a-z\_0-9]+)/i,u()+"$1=$2");r=r.replace(/(&\#?[0-9a-z]{2,})([\x00-\x20])*;?/i,"$1;$2");r=r.replace(/(&\#x?)([0-9A-F]+);?/i,"$1;$2");r=r.replace(u(),"&");try{r=decodeURIComponent(r)}catch(a){}r=r.replace(/[a-z]+=([\'\"]).*?\1/gi,function(t,r){return t.replace(r,p(r))});r=c(r);r=r.replace("	"," ");var l=r;for(var i in s){r=r.replace(i,s[i])}for(var i in n){r=r.replace(new RegExp(i,"i"),n[i])}for(var i in o){var f=o[i].split("").join("\\s*")+"\\s*";r=r.replace(new RegExp("("+f+")(\\W)","ig"),function(t,r,e){return r.replace(/\s+/g,"")+e})}do{var m=r;if(r.match(/<a/i)){r=r.replace(/<a\s+([^>]*?)(>|$)/gi,function(t,r,e){r=h(r.replace("<","").replace(">",""));return t.replace(r,r.replace(/href=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)/gi,""))})}if(r.match(/<img/i)){r=r.replace(/<img\s+([^>]*?)(\s?\/?>|$)/gi,function(t,r,e){r=h(r.replace("<","").replace(">",""));return t.replace(r,r.replace(/src=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)/gi,""))})}if(r.match(/script/i)||r.match(/xss/i)){r=r.replace(/<(\/*)(script|xss)(.*?)\>/gi,"")}}while(m!=r);event_handlers=["[^a-z_-]on\\w*"];if(!e){event_handlers.push("xmlns")}r=r.replace(new RegExp("<([^><]+?)("+event_handlers.join("|")+")(\\s*=\\s*[^><]*)([><]*)","i"),"<$1$4");naughty="alert|applet|audio|basefont|base|behavior|bgsound|blink|body|embed|expression|form|frameset|frame|head|html|ilayer|iframe|input|isindex|layer|link|meta|object|plaintext|style|script|textarea|title|video|xml|xss";r=r.replace(new RegExp("<(/*\\s*)("+naughty+")([^><]*)([><]*)","gi"),function(t,r,e,i,s){return"&lt;"+r+e+i+s.replace(">","&gt;").replace("<","&lt;")});r=r.replace(/(alert|cmd|passthru|eval|exec|expression|system|fopen|fsockopen|file|file_get_contents|readfile|unlink)(\s*)\((.*?)\)/gi,"$1$2&#40;$3&#41;");for(var i in s){r=r.replace(i,s[i])}for(var i in n){r=r.replace(new RegExp(i,"i"),n[i])}if(e&&r!==l){throw new Error("Image may contain XSS")}return r};function c(t){for(var r in a){t=t.replace(a[r],"")}return t}function u(){return"!*$^#(@*#&"}function p(t){return t.replace(">","&gt;").replace("<","&lt;").replace("\\","\\\\")}function h(t){var r=/\/\*.*?\*\//g;return t.replace(/\s*[a-z-]+\s*=\s*'[^']*'/gi,function(t){return t.replace(r,"")}).replace(/\s*[a-z-]+\s*=\s*"[^"]*"/gi,function(t){return t.replace(r,"")}).replace(/\s*[a-z-]+\s*=\s*[^\s]+/gi,function(t){return t.replace(r,"")})}var l=t.Validator=function(){};l.prototype.check=function(t,r){this.str=typeof t==="undefined"||t===null||isNaN(t)&&t.length===undefined?"":t+"";this.msg=r;this._errors=this._errors||[];return this};l.prototype.validate=l.prototype.check;l.prototype.assert=l.prototype.check;l.prototype.error=function(t){throw new Error(t)};function f(t){if(t instanceof Date){return t}var r=Date.parse(t);if(isNaN(r)){return null}return new Date(r)}l.prototype.isAfter=function(t){t=t||new Date;var r=f(this.str),e=f(t);if(!(r&&e&&r>=e)){return this.error(this.msg||"Invalid date")}return this};l.prototype.isBefore=function(t){t=t||new Date;var r=f(this.str),e=f(t);if(!(r&&e&&r<=e)){return this.error(this.msg||"Invalid date")}return this};l.prototype.isEmail=function(){if(!this.str.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)){return this.error(this.msg||"Invalid email")}return this};l.prototype.isCreditCard=function(){this.str=this.str.replace(/[^0-9]+/g,"");if(!this.str.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)){return this.error(this.msg||"Invalid credit card")}var t=0;var r;var e;var i=false;for(var s=this.length-1;s>=0;s--){r=this.substring(s,s+1);e=parseInt(r,10);if(i){e*=2;if(e>=10){t+=e%10+1}else{t+=e}}else{t+=e}if(i){i=false}else{i=true}}if(t%10!==0){return this.error(this.msg||"Invalid credit card")}return this};l.prototype.isUrl=function(){if(!this.str.match(/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i)||this.str.length>2083){return this.error(this.msg||"Invalid URL")}return this};l.prototype.isIP=function(){if(!this.str.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)){return this.error(this.msg||"Invalid IP")}return this};l.prototype.isAlpha=function(){if(!this.str.match(/^[a-zA-Z]+$/)){return this.error(this.msg||"Invalid characters")}return this};l.prototype.isAlphanumeric=function(){if(!this.str.match(/^[a-zA-Z0-9]+$/)){return this.error(this.msg||"Invalid characters")}return this};l.prototype.isNumeric=function(){if(!this.str.match(/^-?[0-9]+$/)){return this.error(this.msg||"Invalid number")}return this};l.prototype.isLowercase=function(){if(!this.str.match(/^[a-z0-9]+$/)){return this.error(this.msg||"Invalid characters")}return this};l.prototype.isUppercase=function(){if(!this.str.match(/^[A-Z0-9]+$/)){return this.error(this.msg||"Invalid characters")}return this};l.prototype.isInt=function(){if(!this.str.match(/^(?:-?(?:0|[1-9][0-9]*))$/)){return this.error(this.msg||"Invalid integer")}return this};l.prototype.isDecimal=function(){if(!this.str.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/)){return this.error(this.msg||"Invalid decimal")}return this};l.prototype.isFloat=function(){return this.isDecimal()};l.prototype.notNull=function(){if(this.str===""){return this.error(this.msg||"Invalid characters")}return this};l.prototype.isNull=function(){if(this.str!==""){return this.error(this.msg||"Invalid characters")}return this};l.prototype.notEmpty=function(){if(this.str.match(/^[\s\t\r\n]*$/)){return this.error(this.msg||"String is whitespace")}return this};l.prototype.equals=function(t){if(this.str!=t){return this.error(this.msg||"Not equal")}return this};l.prototype.contains=function(t){if(this.str.indexOf(t)===-1){return this.error(this.msg||"Invalid characters")}return this};l.prototype.notContains=function(t){if(this.str.indexOf(t)>=0){return this.error(this.msg||"Invalid characters")}return this};l.prototype.regex=l.prototype.is=function(t,r){if(Object.prototype.toString.call(t).slice(8,-1)!=="RegExp"){t=new RegExp(t,r)}if(!this.str.match(t)){return this.error(this.msg||"Invalid characters")}return this};l.prototype.notRegex=l.prototype.not=function(t,r){if(Object.prototype.toString.call(t).slice(8,-1)!=="RegExp"){t=new RegExp(t,r)}if(this.str.match(t)){this.error(this.msg||"Invalid characters")}return this};l.prototype.len=function(t,r){if(this.str.length<t){return this.error(this.msg||"String is too small")}if(typeof r!==undefined&&this.str.length>r){return this.error(this.msg||"String is too large")}return this};l.prototype.isUUID=function(t){var r;if(t==3||t=="v3"){r=/[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i}else if(t==4||t=="v4"){r=/[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i}else{r=/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i}if(!this.str.match(r)){return this.error(this.msg||"Not a UUID")}return this};l.prototype.isDate=function(){var t=Date.parse(this.str);if(isNaN(t)){return this.error(this.msg||"Not a date")}return this};l.prototype.isIn=function(t){if(t&&typeof t.indexOf==="function"){if(!~t.indexOf(this.str)){return this.error(this.msg||"Unexpected value")}return this}else{return this.error(this.msg||"Invalid in() argument")}};l.prototype.notIn=function(t){if(t&&typeof t.indexOf==="function"){if(t.indexOf(this.str)!==-1){return this.error(this.msg||"Unexpected value")}return this}else{return this.error(this.msg||"Invalid notIn() argument")}};l.prototype.min=function(t){var r=parseFloat(this.str);if(!isNaN(r)&&r<t){return this.error(this.msg||"Invalid number")}return this};l.prototype.max=function(t){var r=parseFloat(this.str);if(!isNaN(r)&&r>t){return this.error(this.msg||"Invalid number")}return this};l.prototype.isArray=function(){if(!Array.isArray(this.str)){return this.error(this.msg||"Not an array")}return this};var m=t.Filter=function(){};var d="\\r\\n\\t\\s";m.prototype.modify=function(t){this.str=t};m.prototype.convert=m.prototype.sanitize=function(t){this.str=t==null?"":t+"";return this};m.prototype.xss=function(r){this.modify(t.xssClean(this.str,r));return this.str};m.prototype.entityDecode=function(){this.modify(e(this.str));return this.str};m.prototype.entityEncode=function(){this.modify(i(this.str));return this.str};m.prototype.escape=function(){this.modify(this.str.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"));return this.str};m.prototype.ltrim=function(t){t=t||d;this.modify(this.str.replace(new RegExp("^["+t+"]+","g"),""));return this.str};m.prototype.rtrim=function(t){t=t||d;this.modify(this.str.replace(new RegExp("["+t+"]+$","g"),""));return this.str};m.prototype.trim=function(t){t=t||d;this.modify(this.str.replace(new RegExp("^["+t+"]+|["+t+"]+$","g"),""));return this.str};m.prototype.ifNull=function(t){if(!this.str||this.str===""){this.modify(t)}return this.str};m.prototype.toFloat=function(){this.modify(parseFloat(this.str));return this.str};m.prototype.toInt=function(t){t=t||10;this.modify(parseInt(this.str,t));return this.str};m.prototype.toBoolean=function(){if(!this.str||this.str=="0"||this.str=="false"||this.str==""){this.modify(false)}else{this.modify(true)}return this.str};m.prototype.toBooleanStrict=function(){if(this.str=="1"||this.str=="true"){this.modify(true)}else{this.modify(false)}return this.str};t.sanitize=t.convert=function(r){var e=new t.Filter;return e.sanitize(r)};t.check=t.validate=t.assert=function(r,e){var i=new t.Validator;return i.check(r,e)}})(typeof exports==="undefined"?window:exports);