
# MemeScan Backend

Backend service that analyzes memecoin risks using domain WHOIS data and Solana token holder info.

## Setup

```bash
git clone https://github.com/snipeguard/memescan-backend.git
cd memescan-backend
npm install
cp .env.example .env
node index.js
```

## API Endpoints

- `/api/domain-age?domain=pump.fun`
- `/api/solana-holders?tokenAddress=YourTokenAddress`
- `/api/risk-score?domain=pump.fun&tokenAddress=YourTokenAddress`
