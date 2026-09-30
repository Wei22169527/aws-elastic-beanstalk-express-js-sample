const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('./app');
const http = require('node:http');
test('GET / returns Hello World', async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;
        const result = await new Promise((resolve, reject) => {
          http.get(`http://127.0.0.1:${port}/`, (response) => {
        let body = '';

        response.on('data', (chunk) => {
            body += chunk;
        });

        response.on('end', () => {
            resolve({
                status: response.statusCode,
                body: body
            });
        });
    }).on('error', reject);
});

        assert.equal(result.status, 200);
        assert.equal(result.body, 'Hello World!');
    } finally {
        server.close();
    }
});