import React, { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "zh", name: "Chinese (Mandarin)" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "ar", name: "Arabic" },
  { code: "bn", name: "Bengali" },
  { code: "ru", name: "Russian" },
  { code: "pt", name: "Portuguese" },
  { code: "ur", name: "Urdu" },
  { code: "id", name: "Indonesian" },
  { code: "de", name: "German" },
  { code: "ja", name: "Japanese" },
  { code: "sw", name: "Swahili" },
  { code: "pa", name: "Punjabi" },
  { code: "te", name: "Telugu" },
  { code: "vi", name: "Vietnamese" },
  { code: "mr", name: "Marathi" },
  { code: "tr", name: "Turkish" },
  { code: "ta", name: "Tamil" },
  { code: "ko", name: "Korean" },
  { code: "jv", name: "Javanese" },
  { code: "it", name: "Italian" },
  { code: "gu", name: "Gujarati" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "ml", name: "Malayalam" },
  { code: "uk", name: "Ukrainian" },
  { code: "my", name: "Burmese" },
  { code: "th", name: "Thai" },
  { code: "ha", name: "Hausa" },
  { code: "ro", name: "Romanian" },
  { code: "nl", name: "Dutch" },
  { code: "am", name: "Amharic" },
  { code: "yo", name: "Yoruba" },
  { code: "az", name: "Azerbaijani" },
  { code: "or", name: "Odia" },
  { code: "ma", name: "Maithili" },
  { code: "ne", name: "Nepali" },
  { code: "sd", name: "Sindhi" },
  { code: "sr", name: "Serbian" },
  { code: "cs", name: "Czech" },
  { code: "el", name: "Greek" },
  { code: "hu", name: "Hungarian" },
  { code: "sv", name: "Swedish" },
  { code: "fi", name: "Finnish" },
  { code: "da", name: "Danish" },
  { code: "bg", name: "Bulgarian" },
  { code: "sk", name: "Slovak" },
];

const TranslatePage = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");

  const handleTranslate = async () => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=${sourceLang}|${targetLang}`
      );
      const data = await response.json();
      setTranslatedText(data.responseData.translatedText);
    } catch (error) {
      console.error("Translation failed:", error);
    }
  };

  const switchLanguages = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
    setInputText(translatedText);
    setTranslatedText("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">🌍 Translate Any Language</h1>

      <div className="flex gap-4 mb-4">
        <select
          className="p-2 border rounded"
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <button
          onClick={switchLanguages}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          ↔ Switch
        </button>

        <select
          className="p-2 border rounded"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <textarea
        className="w-full max-w-lg p-3 border rounded mb-4"
        rows="4"
        placeholder="Enter text to translate..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        onClick={handleTranslate}
        className="px-6 py-2 bg-green-600 text-white rounded mb-4"
      >
        Translate
      </button>

      <textarea
        className="w-full max-w-lg p-3 border rounded bg-gray-100"
        rows="4"
        readOnly
        value={translatedText}
      />
    </div>
  );
};

export default TranslatePage;
