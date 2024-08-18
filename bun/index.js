const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};


const server = Bun.serve({
    port: 3000,
    fetch(request) {
      return new Response(JSON.stringify({ fibonacci: fibonacci(20) }))
    },
})
 
console.log(`Listening on localhost:${server.port}`)