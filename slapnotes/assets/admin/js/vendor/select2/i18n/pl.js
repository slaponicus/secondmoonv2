/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function()***REMOVED***if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/pl",[],function()***REMOVED***var e=["znak","znaki","znaków"],t=["element","elementy","elementów"],n=function(t,n)***REMOVED***if(t===1)return n[0];if(t>1&&t<=4)return n[1];if(t>=5)return n[2]***REMOVED***;return***REMOVED***errorLoading:function()***REMOVED***return"Nie można załadować wyników."***REMOVED***,inputTooLong:function(t)***REMOVED***var r=t.input.length-t.maximum;return"Usuń "+r+" "+n(r,e)***REMOVED***,inputTooShort:function(t)***REMOVED***var r=t.minimum-t.input.length;return"Podaj przynajmniej "+r+" "+n(r,e)***REMOVED***,loadingMore:function()***REMOVED***return"Trwa ładowanie…"***REMOVED***,maximumSelected:function(e)***REMOVED***return"Możesz zaznaczyć tylko "+e.maximum+" "+n(e.maximum,t)***REMOVED***,noResults:function()***REMOVED***return"Brak wyników"***REMOVED***,searching:function()***REMOVED***return"Trwa wyszukiwanie…"***REMOVED******REMOVED******REMOVED***),***REMOVED***define:e.define,require:e.require***REMOVED******REMOVED***)();