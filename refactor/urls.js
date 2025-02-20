// Refactor this code

function getURL(dev = false, tasks = {}) {
    let url = dev ? '/tasks?status=ACTIVE&dev=true&size=20' : '/tasks';
    let queryParams = [];

    // Checking nextTasks is present or not???
    if (tasks.nextTasks) {
        queryParams.push('hasNext=true');
    }

    if (tasks.prevTasks) {
        queryParams.push('hasPrev=true');
    }

    // if queryParams has values just added them in...
    if (queryParams.length > 0) {
        const separator = url.includes('?') ? '&' : '?';
        url += separator + queryParams.join('&');
    }

    return { url };
}

