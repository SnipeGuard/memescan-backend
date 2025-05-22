
const axios = require('axios');

exports.checkDomainAge = async (domain) => {
    try {
        const apiKey = process.env.WHOIS_API_KEY;
        const res = await axios.get(\`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=\${apiKey}&domainName=\${domain}&outputFormat=JSON\`);
        const createdDate = res.data.WhoisRecord.createdDate;
        const ageInYears = new Date().getFullYear() - new Date(createdDate).getFullYear();
        return { createdDate, ageInYears };
    } catch (err) {
        return { error: 'Failed to fetch domain age', details: err.message };
    }
};
