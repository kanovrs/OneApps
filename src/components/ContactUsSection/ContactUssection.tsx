"use client";
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import Tag from "../Tag";
import Button from "../Button/Button";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ContactUsSection() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const isMobile = useIsMobile();

  // Функція маски, яка не ламає видалення (Backspace)
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, ""); // тільки цифри
    if (!digits) return "";

    // Формуємо маску +38 (0XX) XXX XX XX
    let res = "+38 (0";
    const mainPart = digits.startsWith("380")
      ? digits.slice(3)
      : digits.slice(1);

    for (let i = 0; i < mainPart.length && i < 9; i++) {
      if (i === 2) res += ") ";
      if (i === 5) res += " ";
      if (i === 7) res += " ";
      res += mainPart[i];
    }
    return res;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Якщо користувач видаляє символи і залишається тільки префікс — очищуємо повністю
    if (input.length < phone.length && phone.length <= 6) {
      setPhone("");
      return;
    }

    const formatted = formatPhone(input);
    setPhone(formatted);
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanDigits = phone.replace(/\D/g, "");

    if (cleanDigits.length < 12) {
      setError("Введіть коректний номер телефону");
      return;
    }

    try {
      const res = await fetch("http://91.247.36.48:3014/api/forms/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: `+${cleanDigits}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Помилка сервера");
      }

      // при успехе
      setPhone("");
      setError("");
      console.log("Успішно відправлено");
    } catch (err) {
      console.error(err);
      setError("Не вдалося відправити номер. Спробуйте пізніше.");
    }
  };

  const titleText = isMobile ? (
    "Пишіть, щоб отримати консультацію або запустити свій додаток"
  ) : (
    <>
      Пишіть, щоб отримати{"\n"} консультацію або{"\n"} запустити свій додаток
    </>
  );

  const containerClass = isMobile ? "w-[calc(100%+80px)] -mx-[40px] px-4" : "";

  return (
    <section
      className={`mt-[64px] md:mt-[180px] relative ${
        isMobile ? "" : "overflow-hidden"
      }`}
    >
      <div className="flex flex-col items-start gap-2 pt-8 relative z-30">
        <Tag square text="[: ONEAPPS" />

        <h2 className="w-full font-bold text-[32px] md:text-h2 uppercase text-text-light md:whitespace-pre-line md:leading-[1.2] pt-2 pb-[44px]">
          {titleText}
        </h2>

        <div
          className={`flex flex-col md:flex-row justify-between items-center w-full mt-15 gap-6 ${
            isMobile ? "overflow-x-visible" : ""
          }`}
        >
          <div className={containerClass}>
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col w-full md:max-w-[450px] lg:max-w-[544px] border-b transition-colors pb-7 mt-6 ${
                error
                  ? "border-red-500"
                  : "border-bg-black70 focus-within:border-text-light"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={phone}
                  onChange={handlePhoneChange}
                  className={`w-full bg-transparent outline-none text-text-light placeholder-text-dark placeholder:font-bold placeholder:text-[24px] placeholder:leading-[26px] py-3 text-reg autofill-clean ${
                    isMobile ? "pl-6" : ""
                  }`}
                  required
                />
                <Button />
              </div>

              {/* Повідомлення про помилку під лінією */}
              {error && (
                <span className="text-red-500 text-sm mt-2 absolute translate-y-12">
                  {error}
                </span>
              )}
            </form>
          </div>

          <div className={containerClass}>
            <a
              href="https://t.me/oneapps_sales"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center transition-all duration-300 cursor-pointer bg-[#0F0F0F] hover:bg-[#F9FF00] ${
                isMobile ? "w-full" : ""
              }`}
              style={{
                width: isMobile ? "100%" : "379px",
                height: "96px",
                gap: "32px",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <div className="relative flex items-center justify-center w-16 h-16 bg-bg-black80 group-hover:bg-[#F9FF00] group-hover:shadow-[0px_7px_15px_0px_#00000040,8px_8px_15px_0px_#C9CD0880_inset] rounded-lg p-4 transition-all duration-300">
                <Image
                  src="/Design/telegramIcon.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="opacity-100 group-hover:opacity-0 transition-all duration-300"
                />
                <Image
                  src="/Design/telegramIcon-black.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <span className="text-[#fefff8] group-hover:text-[#242424] transition-all duration-300">
                @oneapps_sales
              </span>
            </a>
          </div>
        </div>

        <div className="text-neutral-30 text-sup mt-[80px] text-center w-full">
          <p>© 2025 OneApps.</p>
          <p>Всі права захищено. Політика конфіденційності</p>
        </div>

        <div className="w-full mt-[53px]">
          <Image
            src={
              isMobile
                ? "/Design/Grid-bottom-mob.svg"
                : "/Design/review-card/Grid-top.svg"
            }
            alt="grid"
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
