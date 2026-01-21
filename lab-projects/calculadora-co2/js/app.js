document.addEventListener('DOMContentLoaded', () => {
    CONFIG.populateDatalist();
    CONFIG.setupDistanceAutofill();
    
    const calculatorForm = document.getElementById('calculator-form');
    calculatorForm.addEventListener('submit', handleFormSubmit);
    
    console.log('✅ Calculadora inicializada!');
    
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const origin = document.getElementById('origin').value.trim();
        const destination = document.getElementById('destination').value.trim();
        const distance = parseFloat(document.getElementById('distance').value);
        const transportModeInput = document.querySelector('input[name="transport"]:checked');
        const transportMode = transportModeInput?.value ?? null;
        
        if (!origin || !destination) {
            alert('❌ Por favor, preencha a origem e o destino.');
            return;
        }
        
        if (!distance || distance <= 0) {
            alert('❌ Por favor, insira uma distância válida maior que zero.');
            return;
        }
        
        if (!transportMode) {
            alert('❌ Por favor, selecione um meio de transporte.');
            return;
        }
        
        const submitButton = calculatorForm.querySelector('.form-submit');
        UI.showLoading(submitButton);
        UI.hideElement('results');
        UI.hideElement('comparison');
        UI.hideElement('carbon-credits');
        
        setTimeout(() => {
            try {
                const emission = Calculator.calculateEmission(distance, transportMode);
                const carEmission = Calculator.calculateEmission(distance, 'car');
                const savings = transportMode !== 'car' 
                    ? Calculator.calculateSavings(emission, carEmission)
                    : null;
                const allModesComparison = Calculator.calculateAllModes(distance);
                const carbonCredits = Calculator.calculateCarbonCredits(emission);
                const creditPrice = Calculator.estimateCreditPrice(carbonCredits);
                
                const resultsData = {
                    origin,
                    destination,
                    distance,
                    emission,
                    mode: transportMode,
                    savings
                };
                
                const creditsData = {
                    credits: carbonCredits,
                    price: creditPrice
                };
                
                document.getElementById('results-content').innerHTML = UI.renderResults(resultsData);
                document.getElementById('comparison-content').innerHTML = UI.renderComparison(allModesComparison, transportMode);
                document.getElementById('carbon-credits-content').innerHTML = UI.renderCarbonCredits(creditsData);
                
                UI.showElement('results');
                UI.showElement('comparison');
                UI.showElement('carbon-credits');
                UI.scrollToElement('results');
                UI.hideLoading(submitButton);
                
                console.log('✅ Cálculo concluído:', { emission, credits: carbonCredits, savings });
                
            } catch (error) {
                console.error('❌ Erro ao calcular emissões:', error);
                alert('❌ Ocorreu um erro ao calcular as emissões. Por favor, tente novamente.');
                UI.hideLoading(submitButton);
            }
        }, 1500);
    }
});
