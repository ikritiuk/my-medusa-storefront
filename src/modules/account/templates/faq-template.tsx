"use client"
import React, { useState } from "react"

const faqs = [
  {
    question: "Какой механизм используется в ваших часах?",
    answer: "— Как и в оригинальных моделях Rolex, в наших репликах используется автоматический механизм. Такие часы не нужно заводить, они заводятся ежедневным движением руки. При ношении или оставлении без движения часы могут работать до 72 часов.",
  },
  {
    question: "Какое стекло используется в ваших часах?",
    answer: "— Все наши часы оснащены сапфировыми стеклами. Это стекло устойчиво к царапинам. Оно имеет особый блеск, который при правильном уходе сохраняется надолго.",
  },
  {
    question: "Действительно ли ваши часы водонепроницаемы?",
    answer: "\n" +
      "Все часы в нашем магазине водонепроницаемы. Однако, они не предназначены для дайвинга или длительного пребывания в воде. Вы можете не беспокоиться о брызгах или кратковременных ливнях, но не рекомендуется использовать их для купания и дайвинга. Носите их с осторожностью в сауне и избегайте воздействия морской воды. Важно помнить, что гарантия не покрывает потерю внешнего вида или повреждения механизма от воздействия воды, экстремальных температур, влажности или неблагоприятной среды. В таких случаях часы нельзя отремонтировать или вернуть по гарантии, даже если гарантийный срок еще действует.",
  },
  {
    question: "Что делать, если браслет слишком велик для моего запястья?",
    answer: (
      <>

        Наши часы имеют удобное звено Easylink от Ролекс 1996 года, которое быстро регулирует длину браслета для
        большего комфорта. Это звено незаметно под застежкой, позволяя вам мгновенно изменять длину браслета.

        {"\n"}

        <a
          href="https://www.youtube.com/watch?v=9elCMb88yCg&ab_channel=MillenaryWatches"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Видео инструкция.
        </a>
        {"\n"}
        Если это не достаточно, вы можете самостоятельно укоротить браслет или обратиться к специалисту.
      </>
    ),
  },
]

const FaqTemplate = () => {
  const [openState, setOpenState] = useState({})

  const toggleAnswer = (index) => {
    setOpenState((prevOpenState) => ({
      ...prevOpenState,
      [index]: !prevOpenState[index],
    }))
  }

  return (
    <div className="py-12">
      <div className="content-container">
        <div className=" py-12">
          <div className="w-full max-w-5xl px-6 py-12 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h1>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAnswer(index)}>
                    <h2 className="text-lg font-medium">{faq.question}</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transition-transform transform ${openState[index] ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={openState[index] ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
                      />
                    </svg>
                  </div>
                  <p className={`mt-2 ${openState[index] ? "block" : "hidden"}`}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqTemplate
