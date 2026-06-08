script.js
function checkSymptoms() {
  const input = document.getElementById("symptoms").value.toLowerCase().trim();
  const resultBox = document.getElementById("result");

  const database = {
    flu: {
      name: "Influenza (Flu)",
      symptoms: "Fever, cough, sore throat, muscle aches, fatigue.",
      causes: "Influenza virus types A, B, or C.",
      treatment: "Rest, hydration, antiviral medications.",
      prevention: "Annual flu vaccine, hygiene."
    },
    covid: {
      name: "COVID-19",
      symptoms: "Fever, dry cough, fatigue, loss of taste/smell.",
      causes: "SARS-CoV-2 virus.",
      treatment: "Isolation, supportive care.",
      prevention: "Vaccination, masks, hygiene."
    },
    migraine: {
      name: "Migraine",
      symptoms: "Throbbing headache, nausea, light sensitivity.",
      causes: "Stress, hormones, diet.",
      treatment: "Painkillers, rest, preventive meds.",
      prevention: "Avoid triggers, sleep well."
    },
    malaria: {
      name: "Malaria",
      symptoms: "Fever, chills, vomiting, muscle pain.",
      causes: "Plasmodium parasite (mosquito).",
      treatment: "Antimalarial medications.",
      prevention: "Mosquito nets, repellents."
    }
  };

  const symptomsMap = {
    fever: ["flu", "covid", "malaria"],
    ache: ["flu", "migraine"],
    cough: ["flu", "covid"],
    headache: ["migraine"],
    fatigue: ["flu", "covid"],
    chills: ["malaria"]
  };

  let matchedKey = null;

  for (let key in database) {
    if (input.includes(key)) {
      matchedKey = key;
      break;
    }
  }

  if (!matchedKey) {
    for (let symptom in symptomsMap) {
      if (input.includes(symptom)) {
        matchedKey = symptomsMap[symptom][0];
        break;
      }
    }
  }

  if (matchedKey && database[matchedKey]) {
    const info = database[matchedKey];
    resultBox.innerHTML = `
      <h3>${info.name}</h3>
      <p><strong>Symptoms:</strong> ${info.symptoms}</p>
      <p><strong>Causes:</strong> ${info.causes}</p>
      <p><strong>Treatment:</strong> ${info.treatment}</p>
      <p><strong>Prevention:</strong> ${info.prevention}</p>
    `;
  } else if (!input) {
    resultBox.innerHTML = "⚠ Please enter a symptom or disease.";
  } else {
    resultBox.innerHTML = "❌ Not found. Try: fever, flu, ache, malaria, etc.";
  }
}