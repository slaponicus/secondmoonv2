/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function()***REMOVED***if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/sr-Cyrl",[],function()***REMOVED***function e(e,t,n,r)***REMOVED***return e%10==1&&e%100!=11?t:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?n:r***REMOVED***return***REMOVED***errorLoading:function()***REMOVED***return"Преузимање није успело."***REMOVED***,inputTooLong:function(t)***REMOVED***var n=t.input.length-t.maximum,r="Обришите "+n+" симбол";return r+=e(n,"","а","а"),r***REMOVED***,inputTooShort:function(t)***REMOVED***var n=t.minimum-t.input.length,r="Укуцајте бар још "+n+" симбол";return r+=e(n,"","а","а"),r***REMOVED***,loadingMore:function()***REMOVED***return"Преузимање још резултата…"***REMOVED***,maximumSelected:function(t)***REMOVED***var n="Можете изабрати само "+t.maximum+" ставк";return n+=e(t.maximum,"у","е","и"),n***REMOVED***,noResults:function()***REMOVED***return"Ништа није пронађено"***REMOVED***,searching:function()***REMOVED***return"Претрага…"***REMOVED******REMOVED******REMOVED***),***REMOVED***define:e.define,require:e.require***REMOVED******REMOVED***)();