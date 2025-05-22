
exports.calculateRisk = (domainData, holderData) => {
    let score = 0;

    if (domainData.ageInYears < 1) score += 5;
    if (holderData && holderData.length > 0 && holderData[0].amount > 0.2) score += 5;

    let level = 'Low';
    if (score >= 5) level = 'Medium';
    if (score >= 10) level = 'High';

    return { score, level };
};
