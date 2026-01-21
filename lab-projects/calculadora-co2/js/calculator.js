const Calculator = {
    calculateEmission(distanceKm, transportMode) {
        const emissionFactor = CONFIG.EMISSION_FACTORS[transportMode];
        const emission = distanceKm * emissionFactor;
        return Math.round(emission * 100) / 100;
    },

    calculateAllModes(distanceKm) {
        const carEmission = this.calculateEmission(distanceKm, 'car');
        
        const results = Object.entries(CONFIG.EMISSION_FACTORS).map(([mode, factor]) => {
            const emission = distanceKm * factor;
            const percentageVsCar = carEmission > 0 
                ? Math.round((emission / carEmission) * 100 * 100) / 100
                : 0;
            
            return { mode, emission, percentageVsCar };
        });
        
        return results.sort((a, b) => a.emission - b.emission);
    },

    calculateSavings(emission, baselineEmission) {
        const savedKg = baselineEmission - emission;
        const percentage = baselineEmission > 0
            ? (savedKg / baselineEmission) * 100
            : 0;
        
        return {
            savedKg: Math.round(savedKg * 100) / 100,
            percentage: Math.round(percentage * 100) / 100
        };
    },

    calculateCarbonCredits(emissionKg) {
        const credits = emissionKg / CONFIG.CARBON_CREDIT.KG_PER_CREDIT;
        return Math.round(credits * 10000) / 10000;
    },

    estimateCreditPrice(credits) {
        const min = credits * CONFIG.CARBON_CREDIT.PRICE_MIN_BRL;
        const max = credits * CONFIG.CARBON_CREDIT.PRICE_MAX_BRL;
        const average = (min + max) / 2;
        
        return {
            min: Math.round(min * 100) / 100,
            max: Math.round(max * 100) / 100,
            average: Math.round(average * 100) / 100
        };
    }
};
