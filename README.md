# Winter JS benchmark

Using [AutoCannon](https://www.npmjs.com/package/autocannon) to benchmark server.
Using [Wasmer](https://docs.wasmer.io/install) to run WinterJS

Running WinterJS server on Wasmer:
```
cd winter
wasmer run wasmer/winterjs --net --mapdir=./:. ./index.js
```

Running Bun:
```
cd bun
bun run index.js
```

# Benchmarks

## Bun
Running 10s test @ http://localhost:3000
10 connections


| Stat    | 2.5% | 50%  | 97.5% | 99%  | Avg     | Stdev   | Max  |
|---------|------|------|-------|------|----------|---------|------|
| Latency | 0 ms | 0 ms | 0 ms  | 0 ms | 0.01 ms  | 0.08 ms | 8 ms |

| Stat      | 1%      | 2.5%    | 50%    | 97.5%   | Avg      | Stdev   | Min     |
|-----------|---------|---------|--------|---------|----------|---------|---------|
| Req/Sec   | 23.935  | 23.935  | 24.639 | 25.039  | 24.572,8 | 375,51  | 23.927  |
| Bytes/Sec | 3.21 MB | 3.21 MB | 3.3 MB | 3.35 MB | 3.29 MB  | 50.2 kB | 3.21 MB |

Req/Bytes counts sampled once per second.
\# of samples: 10

246k requests in 10.01s, 32.9 MB read

## WinterJS

Running 10s test @ http://localhost:8080
10 connections


| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev   | Max    |
|---------|-------|-------|-------|-------|----------|---------|-------|
| Latency | 51 ms | 52 ms | 66 ms | 67 ms | 52.99 ms | 5.36 ms | 140 ms |

| Stat      | 1%    | 2.5%  | 50%   | 97.5% | Avg      | Stdev   | Min    |
|-----------|-------|-------|-------|-------|----------|---------|-------|
| Req/Sec   | 168   | 168   | 171   | 187   | 175,82   | 7,63    | 168   |
| Bytes/Sec | 22.5 kB | 22.5 kB | 22.9 kB | 25.1 kB | 23.6 kB | 1.02 kB | 22.5 kB |

Req/Bytes counts sampled once per second.
\# of samples: 11

2k requests in 11.01s, 259 kB read