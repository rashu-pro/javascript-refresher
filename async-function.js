/**
 * Asynchronously fetches a TODO item from a remote endpoint and returns the parsed JSON.
 *
 * Workflow:
 * 1. Calls fetch(...) to initiate an HTTP request and awaits the Response.
 * 2. Awaits response.json() to parse the response body as JSON.
 * 3. Returns the parsed JSON value; because the function is async, this value is wrapped
 *    in a Promise that resolves with the data.
 * 4. Any runtime errors (network failures, JSON parsing errors, etc.) are caught in the
 *    catch block, logged to the console, and the function returns undefined (the Promise
 *    resolves to undefined rather than rejecting).
 *
 * Notes:
 * - fetch only rejects on network errors; HTTP error statuses (4xx/5xx) do not cause rejection.
 *   To treat HTTP error statuses as errors, check response.ok and throw as needed before parsing.
 *
 * @async
 * @function getData
 * @returns {Promise<Object|undefined>} A promise that resolves with the parsed JSON object on success,
 * or resolves to undefined if an error occurred (error is logged).
 */
async function getData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function logData(){
    return getData();
}

(async () => {
    const todo = await getData();
    // console.log(todo);
})();
logData().then(data => console.log(data));
