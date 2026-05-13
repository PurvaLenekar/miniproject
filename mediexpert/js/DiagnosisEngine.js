// A* Search Algorithm: f(n) = g(n) + h(n)
function diagnose(selectedIds) {
  if (!selectedIds.length) return [];

  const results = DISEASES.map(disease => {
    const matched = disease.symptoms.filter(s => selectedIds.includes(s.symptomId));
    const unmatched = disease.symptoms.filter(s => !selectedIds.includes(s.symptomId));
    const gScore = matched.reduce((sum, s) => sum + s.weight, 0);
    const hScore = unmatched.reduce((sum, s) => sum + s.weight, 0);
    const fScore = gScore + hScore;
    const totalWeight = disease.symptoms.reduce((sum, s) => sum + s.weight, 0);
    const confidence = Math.round((gScore / totalWeight) * 100);

    return {
      disease, confidence, fScore, gScore, hScore,
      matchedSymptoms: matched.map(s => SYMPTOMS.find(x => x.id === s.symptomId).name),
      unmatchedSymptoms: unmatched.map(s => SYMPTOMS.find(x => x.id === s.symptomId).name),
    };
  }).filter(r => r.confidence > 0);

  return results.sort((a, b) => b.confidence - a.confidence);
}
