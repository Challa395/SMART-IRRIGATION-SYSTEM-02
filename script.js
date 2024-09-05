function calculateIrrigation() {
    // Gather input values
    const cropType = document.getElementById('cropType').value;
    const soilMoisture = parseFloat(document.getElementById('soilMoisture').value);
    const fieldSize = parseFloat(document.getElementById('fieldSize').value);
    const cropWaterRequirement = parseFloat(document.getElementById('cropWaterRequirement').value);
    const soilType = document.getElementById('soilType').value;
    const irrigationEfficiency = parseFloat(document.getElementById('irrigationEfficiency').value) / 100;

    // Constants
    const desiredMoistureLevel = 30; // Desired moisture level in percentage (for example purposes)

    // Calculate water deficit
    const waterDeficit = Math.max(0, desiredMoistureLevel - soilMoisture);
    const waterDeficitMm = waterDeficit * 100; // Assuming a soil depth of 100 mm

    // Calculate total water needed
    const totalWaterNeeded = cropWaterRequirement;

    // Adjust for irrigation system efficiency
    const effectiveWaterRequirement = totalWaterNeeded / irrigationEfficiency;

    // Calculate total volume needed
    const volumeNeeded = fieldSize * effectiveWaterRequirement;

    // Determine if irrigation is needed
    const isIrrigationNeeded = soilMoisture < desiredMoistureLevel;

    // Display results
    document.getElementById('result').innerHTML = `
        <h2>Calculation Results</h2>
        <p><strong>Is Irrigation Needed?</strong> ${isIrrigationNeeded ? 'Yes' : 'No'}</p>
        <p><strong>Water Deficit:</strong> ${waterDeficitMm.toFixed(2)} mm</p>
        <p><strong>Total Water Needed:</strong> ${totalWaterNeeded.toFixed(2)} mm/day</p>
        <p><strong>Effective Water Requirement:</strong> ${effectiveWaterRequirement.toFixed(2)} mm/day</p>
        <p><strong>Total Volume Needed:</strong> ${volumeNeeded.toFixed(2)} cubic meters</p>
    `;
}
