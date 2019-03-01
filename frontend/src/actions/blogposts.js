function getCookie(name) ***REMOVED***
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') ***REMOVED***
	    var cookies = document.cookie.split(';');
	    for (var i = 0; i < cookies.length; i++) ***REMOVED***
		    var cookie = cookies[i].trim();
		    if (cookie.substring(0, name.length + 1) === (name + '=')) ***REMOVED***
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			***REMOVED***
		***REMOVED***
	***REMOVED***
	return cookieValue;
***REMOVED***

export const fetchBlogposts = (options) => ***REMOVED***
	return (dispatch, getState) => ***REMOVED***
		let csrftoken = getCookie('csrftoken');
		
		let headers = ***REMOVED***"Content-Type": "application/json", "X-CSRFToken": csrftoken***REMOVED***;

		let queryString = '?offset=' + options.page;

		if (options.category) ***REMOVED***
			queryString += "&categories=" + options.category;
		***REMOVED***

		return fetch("/api/blogpost/" + queryString, ***REMOVED***headers, ***REMOVED***)
			.then(res => ***REMOVED***
				if (res.status < 500) ***REMOVED***
					return res.json().then(data => ***REMOVED***
						return ***REMOVED***status: res.status, data***REMOVED***;
					***REMOVED***)
				***REMOVED*** else ***REMOVED***
					console.log("Server Error!");
					throw res;
				***REMOVED***
			***REMOVED***)
			.then(res => ***REMOVED***
				if (res.status === 200) ***REMOVED***
					return dispatch(***REMOVED***type: 'FETCH_BLOGPOSTS', blogposts: res.data***REMOVED***);
				***REMOVED*** else if (res.status === 401 || res.status === 403) ***REMOVED***
					dispatch(***REMOVED***type: "AUTHENTICATION_ERROR", data: res.data***REMOVED***);
	  				throw res.data;
				***REMOVED***
			***REMOVED***)
	***REMOVED***
***REMOVED***

