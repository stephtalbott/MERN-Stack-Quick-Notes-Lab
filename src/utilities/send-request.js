import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
    // fetch accepts an options object as the second argument
    // used to include a data payload, set headers, specificy the method
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // need to add an authorization header
        // use the logical OR assignment operator
        // if headers is falsy, then we assign an empty object
        options.headers ||= {};
        // add token to an authorization header
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    // if res.ok is false, then something went wrong
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}