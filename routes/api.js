
const express = require('express');
const router = express.Router();
const whoisService = require('../services/whoisService');
const solanaService = require('../services/solanaService');
const riskCalculator = require('../services/riskCalculator');

router.get('/domain-age', async (req, res) => {
    const { domain } = req.query;
    const result = await whoisService.checkDomainAge(domain);
    res.json(result);
});

router.get('/solana-holders', async (req, res) => {
    const { tokenAddress } = req.query;
    const result = await solanaService.getTopHolders(tokenAddress);
    res.json(result);
});

router.get('/risk-score', async (req, res) => {
    const { domain, tokenAddress } = req.query;
    const domainData = await whoisService.checkDomainAge(domain);
    const holderData = await solanaService.getTopHolders(tokenAddress);
    const riskScore = riskCalculator.calculateRisk(domainData, holderData);
    res.json({ domainData, holderData, riskScore });
});

module.exports = router;
