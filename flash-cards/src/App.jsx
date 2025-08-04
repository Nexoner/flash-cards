import { useState } from "react";

const flashCardsData = [
  { question: "Как меня зовут?", answer: "Эрнест" },
  { question: "Что я люблю делать?", answer: "Ничего!!!" },
  { question: "Почему я это люблю", answer: "Потому что!!!" },
  // ➕ можешь добавить свои карточки
];

export default function FlashCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const totalCards = flashCardsData.length;
  const progress = ((currentIndex + 1) / totalCards) * 100;

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1 < totalCards ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="w-[350px] p-4 border rounded-xl shadow-md bg-white text-center">
      {/* Прогресс бар */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-gray-500 text-sm mb-2">
        {currentIndex + 1} of {totalCards}
      </p>

      {/* Вопрос / Ответ */}
      <h2 className="text-lg font-semibold mb-6">
        {showAnswer
          ? flashCardsData[currentIndex].answer
          : flashCardsData[currentIndex].question}
      </h2>

      {/* Кнопки */}
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          ‹ Previous
        </button>
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Next ›
        </button>
      </div>
    </div>
  );
}