function calculateIrrigation() {
    const cropType = document.getElementById('cropType').value;
    const soilMoisture = parseFloat(document.getElementById('soilMoisture').value);
    const fieldSize = parseFloat(document.getElementById('fieldSize').value);
    const waterRequirement = parseFloat(document.getElementById('waterRequirement').value);
    const soilType = document.getElementById('soilType').value;
    const irrigationEfficiency = parseFloat(document.getElementById('irrigationEfficiency').value);

    // Basic Calculation Logic (you can update with more precise formulas)
    let waterDeficit = 100 - soilMoisture; // Assume deficit is 100% - current moisture level
    let totalWaterNeeded = waterDeficit * waterRequirement; // Total water required based on deficit
    let effectiveWaterRequirement = totalWaterNeeded / (irrigationEfficiency / 100); // Effective water considering efficiency
    let isIrrigationNeeded = waterDeficit > 0 ? "Yes" : "No";

    // Display results
    document.getElementById('irrigationNeeded').innerText = Irrigation Needed: ${isIrrigationNeeded};
    document.getElementById('waterDeficit').innerText = Water Deficit: ${waterDeficit.toFixed(2)} mm;
    document.getElementById('totalWaterNeeded').innerText = Total Water Needed: ${totalWaterNeeded.toFixed(2)} mm;
    document.getElementById('effectiveWaterRequirement').innerText = Effective Water Requirement: ${effectiveWaterRequirement.toFixed(2)} mm;

    document.getElementById('results').style.display = 'block';
}
