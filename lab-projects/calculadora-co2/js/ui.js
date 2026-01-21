const UI = {
    formatNumber(number, decimals = 2) {
        return number.toLocaleString('pt-BR', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    },

    formatCurrency(value) {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    },

    showElement(elementId) {
        document.getElementById(elementId)?.classList.remove('hidden');
    },

    hideElement(elementId) {
        document.getElementById(elementId)?.classList.add('hidden');
    },

    scrollToElement(elementId) {
        document.getElementById(elementId)?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    },

    renderResults(data) {
        const modeData = CONFIG.TRANSPORT_MODES[data.mode];
        
        let html = `
            <h2 class="section-title">Resultados da Emissão</h2>
            
            <div class="results__grid">
                <div class="results__card">
                    <div class="results__card-icon">🗺️</div>
                    <div class="results__card-content">
                        <h3 class="results__card-title">Rota</h3>
                        <p class="results__card-value">${data.origin} → ${data.destination}</p>
                    </div>
                </div>
                
                <div class="results__card">
                    <div class="results__card-icon">📏</div>
                    <div class="results__card-content">
                        <h3 class="results__card-title">Distância</h3>
                        <p class="results__card-value">${this.formatNumber(data.distance, 0)} km</p>
                    </div>
                </div>
                
                <div class="results__card results__card--highlight">
                    <div class="results__card-icon">🌿</div>
                    <div class="results__card-content">
                        <h3 class="results__card-title">Emissão de CO₂</h3>
                        <p class="results__card-value results__card-value--large">${this.formatNumber(data.emission)} kg</p>
                    </div>
                </div>
                
                <div class="results__card">
                    <div class="results__card-icon">${modeData.icon}</div>
                    <div class="results__card-content">
                        <h3 class="results__card-title">Meio de Transporte</h3>
                        <p class="results__card-value">${modeData.label}</p>
                    </div>
                </div>
        `;
        
        if (data.mode !== 'car' && data.savings?.savedKg > 0) {
            html += `
                <div class="results__card results__card--success">
                    <div class="results__card-icon">✅</div>
                    <div class="results__card-content">
                        <h3 class="results__card-title">Economia vs Carro</h3>
                        <p class="results__card-value">${this.formatNumber(data.savings.savedKg)} kg</p>
                        <p class="results__card-subtitle">${this.formatNumber(data.savings.percentage)}% menos emissões</p>
                    </div>
                </div>
            `;
        }
        
        html += `</div>`;
        
        return html;
    },

    renderComparison(modesArray, selectedMode) {
        let html = `
            <h2 class="section-title">Comparação entre Meios de Transporte</h2>
            <div class="comparison__grid">
        `;
        
        const maxEmission = Math.max(...modesArray.map(m => m.emission));
        
        modesArray.forEach(modeObj => {
            const modeData = CONFIG.TRANSPORT_MODES[modeObj.mode];
            const isSelected = modeObj.mode === selectedMode;
            const barWidth = maxEmission > 0 ? (modeObj.emission / maxEmission) * 100 : 0;
            
            let barColor;
            if (modeObj.percentageVsCar <= 25) {
                barColor = '#10b981';
            } else if (modeObj.percentageVsCar <= 75) {
                barColor = '#f59e0b';
            } else if (modeObj.percentageVsCar <= 100) {
                barColor = '#fb923c';
            } else {
                barColor = '#ef4444';
            }
            
            html += `
                <div class="comparison__item${isSelected ? ' comparison__item--selected' : ''}">
                    <div class="comparison__header">
                        <span class="comparison__icon">${modeData.icon}</span>
                        <span class="comparison__label">${modeData.label}</span>
                        ${isSelected ? '<span class="comparison__badge">Selecionado</span>' : ''}
                    </div>
                    
                    <div class="comparison__stats">
                        <div class="comparison__stat">
                            <span class="comparison__stat-label">Emissão</span>
                            <span class="comparison__stat-value">${this.formatNumber(modeObj.emission)} kg CO₂</span>
                        </div>
                        <div class="comparison__stat">
                            <span class="comparison__stat-label">vs Carro</span>
                            <span class="comparison__stat-value">${this.formatNumber(modeObj.percentageVsCar)}%</span>
                        </div>
                    </div>
                    
                    <div class="comparison__bar-container">
                        <div class="comparison__bar" style="width: ${barWidth}%; background-color: ${barColor};"></div>
                    </div>
                </div>
            `;
        });
        
        html += `
            </div>
            
            <div class="comparison__tip">
                <span class="comparison__tip-icon">💡</span>
                <p class="comparison__tip-text">
                    <strong>Dica:</strong> Escolher meios de transporte mais sustentáveis ajuda a reduzir 
                    significativamente as emissões de CO₂ e contribui para um planeta mais saudável!
                </p>
            </div>
        `;
        
        return html;
    },

    renderCarbonCredits(creditsData) {
        return `
            <h2 class="section-title">Créditos de Carbono</h2>
            
            <div class="carbon-credits__grid">
                <div class="carbon-credits__card">
                    <div class="carbon-credits__card-header">
                        <span class="carbon-credits__icon">🌳</span>
                        <h3 class="carbon-credits__card-title">Créditos Necessários</h3>
                    </div>
                    <div class="carbon-credits__card-body">
                        <p class="carbon-credits__value">${this.formatNumber(creditsData.credits, 4)}</p>
                        <p class="carbon-credits__helper">1 crédito = 1.000 kg CO₂</p>
                    </div>
                </div>
                
                <div class="carbon-credits__card">
                    <div class="carbon-credits__card-header">
                        <span class="carbon-credits__icon">💰</span>
                        <h3 class="carbon-credits__card-title">Custo Estimado</h3>
                    </div>
                    <div class="carbon-credits__card-body">
                        <p class="carbon-credits__value">${this.formatCurrency(creditsData.price.average)}</p>
                        <p class="carbon-credits__helper">
                            Variação: ${this.formatCurrency(creditsData.price.min)} - ${this.formatCurrency(creditsData.price.max)}
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="carbon-credits__info">
                <h4 class="carbon-credits__info-title">O que são Créditos de Carbono?</h4>
                <p class="carbon-credits__info-text">
                    Créditos de carbono são certificados que representam a redução de uma tonelada 
                    de CO₂ da atmosfera. Ao comprar créditos, você compensa suas emissões financiando 
                    projetos de preservação ambiental, reflorestamento e energia renovável.
                </p>
            </div>
            
            <div class="carbon-credits__action">
                <button class="carbon-credits__button" type="button">
                    🛒 Compensar Emissões
                </button>
            </div>
        `;
    },

    showLoading(buttonElement) {
        buttonElement.dataset.originalText = buttonElement.innerHTML;
        buttonElement.disabled = true;
        buttonElement.innerHTML = '<span class="spinner"></span> Calculando...';
    },

    hideLoading(buttonElement) {
        buttonElement.disabled = false;
        buttonElement.innerHTML = buttonElement.dataset.originalText ?? buttonElement.innerHTML;
    }
};
