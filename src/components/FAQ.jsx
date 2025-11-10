import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Is my data safe?",
    answer:
      "Yes! Everything you enter stays in your browser and is never stored on our servers. Your information remains completely private.",
  },
  {
    id: 2,
    question: "Can I edit my CV later?",
    answer:
      "Absolutely! You can come back and update your information as many times as you need before downloading.",
  },
  {
    id: 3,
    question: "Do I need to create an account?",
    answer:
      "Nope! This is a simple tool that works right in your browser. No sign-up required.",
  },
  {
    id: 4,
    question: "What makes this different?",
    answer:
      "This is a learning project focused on simplicity. Just pick a template, fill your details, and download - no complicated features.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl tracking-tight text-neutral-900 sm:text-4xl">
          Frequently Asked{" "}
          <span className="relative z-10 cursor-pointer px-2 font-bold text-neutral-900 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-2 after:w-full after:origin-bottom after:rounded-xs after:bg-amber-300 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:h-full">
            Questions
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-neutral-600">
          Everything you need to know about creating your CV
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="rounded-xl border border-neutral-200 bg-white transition-all hover:shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
              aria-expanded={openId === faq.id}
            >
              <span className="pr-4 text-lg font-medium tracking-tight text-neutral-900">
                {faq.question}
              </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                  openId === faq.id ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                openId === faq.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-neutral-100 px-6 pt-2 pb-6">
                <p className="leading-relaxed text-neutral-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
