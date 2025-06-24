export function middleware(req, ev) {
  return async (res) => {
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Methods', 'GET, PUT, DELETE');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return res;
  };
} 