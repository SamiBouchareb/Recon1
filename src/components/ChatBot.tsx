import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

const CHATGPT_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const SYSTEM_PROMPT = `Du bist ein Kundenberater für Recon, ein Augen- und Hörakustik-Unternehmen in Emden. Hier sind alle wichtigen Informationen über uns:

FORMATIERUNG DER NACHRICHTEN:
- Verwende für Überschriften das Format "Überschrift:"
- Verwende für Aufzählungen Bulletpoints mit "•" oder "-"
- Formatiere Listen wie folgt:
  Überschrift:
  • Punkt 1
  • Punkt 2

ÜBER UNS:
- Gegründet: 2010 in Emden
- Spezialisierung: Hochwertige Augen- und Hördienstleistungen
- Entwicklung:
  • 2015: Teamerweiterung und Einführung modernster Diagnostiktechnologien
  • 2018: Eröffnung zweiter Filiale
  • 2020: Integration digitaler Services
  • 2023: Erweiterung um Hörgeräteakustik

STANDORTE:
• Hauptfiliale Emden:
  - Adresse: Neutorstraße 21, 26721 Emden
  - Telefon: 04921 9191557
  - E-Mail: info@recon-optik.de
  - Öffnungszeiten:
    Mo-Fr: 9:00-18:00
    Sa: 9:00-13:00

• Filiale Emden-Borssum:
  - Adresse: Borssum-Center, Dorfstraße 23, 26723 Emden
  - Telefon: 04921 9739340
  - Öffnungszeiten:
    Mo-Fr: 9:00-18:00
    Sa: 9:00-13:00

SERVICES:
• Augenoptik:
  - Sehtest & Augenscreening
  - Brillenberatung & -anpassung
  - Kontaktlinsenanpassung
  - Sportbrillen
  - Kinderbrillen
  - Arbeitsplatzbrillen
  - Sonnenbrillen

• Hörgeräteakustik:
  - Kostenloser Hörtest
  - Hörgeräteberatung
  - Individuelle Anpassung
  - Gehörschutz
  - Tinnitus-Beratung

QUALITÄT & SERVICE:
- Modernste Messtechnik
- Individuelle Beratung
- Große Markenauswahl
- Kostenlose Sehtests
- Wartung & Reparatur
- Brillenversicherung
- Führende Markenhersteller

TERMINVEREINBARUNG:
- Online über www.recon-optik.de
- Telefonisch: 04921 9191557
- Per E-Mail: termine@recon-optik.de

ZAHLUNGSARTEN:
- EC-Karte
- Kreditkarte (VISA, Mastercard)
- Barzahlung
- Ratenzahlung möglich

Antworte freundlich und professionell auf Kundenanfragen. Verwende "Sie" als Anrede.`;

interface Message {
  text: string;
  isUser: boolean;
  buttons?: Array<{
    label: string;
    action: string;
    url?: string;
  }>;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Willkommen bei Recon! Wie kann ich Ihnen helfen?",
      isUser: false,
      buttons: [
        {
          label: "Termin vereinbaren",
          action: "Ich möchte einen Termin vereinbaren",
        },
        {
          label: "Öffnungszeiten",
          action: "Was sind Ihre Öffnungszeiten?",
        },
        {
          label: "Services",
          action: "Welche Services bieten Sie an?",
        },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = inputValue;
    setInputValue("");
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CHATGPT_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4-1106-preview",
          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            ...messages
              .map((msg) => ({
                role: msg.isUser ? "user" : "assistant",
                content: msg.text,
              }))
              .slice(-10),
            {
              role: "user",
              content: userMessage,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botMessage = data.choices[0].message.content;

      setMessages((prev) => [...prev, { text: botMessage, isUser: false }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es später erneut.",
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleButtonClick = (action: string) => {
    setInputValue(action);
    handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-lg w-96 h-[600px] flex flex-col mb-4 border border-gray-200"
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-primary text-white rounded-t-lg">
              <h2 className="text-lg font-semibold">Recon Chat</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-primary-dark rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                    {message.buttons && (
                      <div className="mt-2 space-y-2">
                        {message.buttons.map((button, buttonIndex) => (
                          <button
                            key={buttonIndex}
                            onClick={() => handleButtonClick(button.action)}
                            className="block w-full text-left p-2 rounded bg-white hover:bg-gray-50 transition-colors duration-200"
                          >
                            {button.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Schreiben Sie Ihre Nachricht..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={1}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || inputValue.trim() === ""}
                  className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-200"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
