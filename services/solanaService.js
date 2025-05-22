
const axios = require('axios');

exports.getTopHolders = async (tokenAddress) => {
    try {
        const apiKey = process.env.SOLANA_API_KEY;
        const url = \`https://public-api.solscan.io/token/holders?tokenAddress=\${tokenAddress}&limit=10\`;
        const res = await axios.get(url, { headers: { token: apiKey } });
        return res.data.data;
    } catch (err) {
        return { error: 'Failed to fetch Solana holders', details: err.message };
    }
};
