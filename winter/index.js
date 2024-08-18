const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

addEventListener('fetch', (req) => {  
    req.respondWith(new Response(JSON.stringify({ fibonacci: fibonacci(20) })));
});