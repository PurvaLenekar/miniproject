const SYMPTOMS = [
  { id: "fever", name: "Fever", category: "General" },
  { id: "cough", name: "Cough", category: "Respiratory" },
  { id: "headache", name: "Headache", category: "General" },
  { id: "bodyPain", name: "Body Pain", category: "General" },
  { id: "fatigue", name: "Fatigue", category: "General" },
  { id: "soreThroat", name: "Sore Throat", category: "Respiratory" },
  { id: "runnyNose", name: "Runny Nose", category: "Respiratory" },
  { id: "breathlessness", name: "Breathlessness", category: "Respiratory" },
  { id: "chills", name: "Chills", category: "General" },
  { id: "nausea", name: "Nausea", category: "Digestive" },
  { id: "vomiting", name: "Vomiting", category: "Digestive" },
  { id: "diarrhea", name: "Diarrhea", category: "Digestive" },
  { id: "lossOfTaste", name: "Loss of Taste/Smell", category: "Neurological" },
  { id: "sweating", name: "Excessive Sweating", category: "General" },
  { id: "rash", name: "Skin Rash", category: "Skin" },
  { id: "jointPain", name: "Joint Pain", category: "General" },
];

const DISEASES = [
  {
    id: "flu", name: "Influenza (Flu)", severity: "moderate",
    description: "A contagious respiratory illness caused by influenza viruses.",
    symptoms: [
      { symptomId: "fever", weight: 0.9 }, { symptomId: "cough", weight: 0.8 },
      { symptomId: "bodyPain", weight: 0.85 }, { symptomId: "headache", weight: 0.7 },
      { symptomId: "fatigue", weight: 0.75 }, { symptomId: "chills", weight: 0.7 },
      { symptomId: "soreThroat", weight: 0.5 },
    ],
    recommendations: ["Rest and hydration", "Antiviral medication within 48hrs", "Consult doctor if symptoms worsen"],
  },
  {
    id: "malaria", name: "Malaria", severity: "severe",
    description: "A mosquito-borne infectious disease affecting humans.",
    symptoms: [
      { symptomId: "fever", weight: 0.95 }, { symptomId: "chills", weight: 0.9 },
      { symptomId: "sweating", weight: 0.85 }, { symptomId: "headache", weight: 0.7 },
      { symptomId: "nausea", weight: 0.6 }, { symptomId: "vomiting", weight: 0.55 },
      { symptomId: "bodyPain", weight: 0.6 },
    ],
    recommendations: ["Seek immediate medical attention", "Antimalarial drugs", "Use mosquito nets"],
  },
  {
    id: "covid19", name: "COVID-19", severity: "severe",
    description: "An infectious disease caused by the SARS-CoV-2 virus.",
    symptoms: [
      { symptomId: "fever", weight: 0.85 }, { symptomId: "cough", weight: 0.9 },
      { symptomId: "breathlessness", weight: 0.8 }, { symptomId: "fatigue", weight: 0.75 },
      { symptomId: "lossOfTaste", weight: 0.95 }, { symptomId: "bodyPain", weight: 0.6 },
      { symptomId: "soreThroat", weight: 0.5 },
    ],
    recommendations: ["Isolate immediately", "Get tested (RT-PCR)", "Monitor oxygen levels"],
  },
  {
    id: "dengue", name: "Dengue Fever", severity: "severe",
    description: "A mosquito-borne tropical disease caused by the dengue virus.",
    symptoms: [
      { symptomId: "fever", weight: 0.95 }, { symptomId: "headache", weight: 0.85 },
      { symptomId: "jointPain", weight: 0.9 }, { symptomId: "rash", weight: 0.7 },
      { symptomId: "nausea", weight: 0.6 }, { symptomId: "fatigue", weight: 0.65 },
    ],
    recommendations: ["Hydrate with ORS", "Avoid aspirin", "Get platelet count checked"],
  },
  {
    id: "cold", name: "Common Cold", severity: "mild",
    description: "A viral infectious disease of the upper respiratory tract.",
    symptoms: [
      { symptomId: "runnyNose", weight: 0.9 }, { symptomId: "soreThroat", weight: 0.85 },
      { symptomId: "cough", weight: 0.7 }, { symptomId: "headache", weight: 0.5 },
      { symptomId: "fatigue", weight: 0.4 },
    ],
    recommendations: ["Rest and warm fluids", "Over-the-counter cold medicine", "Usually resolves in 7-10 days"],
  },
];
