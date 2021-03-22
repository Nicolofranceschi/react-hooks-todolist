async function request(url, params, method = 'GET') {  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    };
  
    const res = await fetch(`api/${url}`, options);
    const json = await res.json();
  
    if (res.status === 400 || res.status === 500) return new Error(json.message);
  
    return json;
  }
  
  export const get = url => request(url);
  export const post = (url, params) => request(url, params, 'POST');
  export const put = (url, params) => request(url, params, 'PUT');
  export const patch = (url, params) => request(url, params, 'PATCH');
  export const del = url => request(url, undefined, 'DELETE');