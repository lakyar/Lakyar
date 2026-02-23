import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  const contactMethods = [
    {
      platform: "Email",
      url: "mailto:lakyarlinn@gmail.com",
      value: "lakyarlinn@gmail.com",
      icon: (
        <svg
          className="size-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-red-500/10 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    },
    {
      platform: "Telegram",
      url: "https://t.me/lakyar",
      value: "@lakyar",
      icon: (
        <svg className="size-8" fill="currentColor" viewBox="0 0 24 24">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.17-.03-.24-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.08-.03.24-.06.41z" />
          </svg>{" "}
        </svg>
      ),
      color:
        "bg-[#0092c7]/10 text-[#0092c7] dark:bg-[#0092c7]/20 dark:text-[#00bcff]",
    },
    {
      platform: "GitHub",
      url: "https://github.com/lakyar",
      value: "github.com/lakyar",
      icon: (
        <svg className="size-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color:
        "bg-neutral-800/10 text-neutral-800 dark:bg-neutral-700/30 dark:text-neutral-300",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/lakyar",
      value: "linkedin.com/in/lakyar",
      icon: (
        <svg className="size-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "bg-blue-500/20 text-[#0966c2]",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      );

      console.log("Email sent:", result.text);
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-start">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            Ready to{" "}
            <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Collaborate?
            </span>
          </h2>

          <p className="mt-4 max-w-3xl text-[13px] tracking-tight sm:text-sm sm:tracking-normal md:mt-6 lg:text-base xl:max-w-5xl dark:text-neutral-300">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life with{" "}
            <span className="font-semibold text-[#50a5b8] dark:text-[#77c1d2]">
              cutting-edge tech
            </span>
            . Whether you need frontend help, want to collaborate, or just have
            feedback — I'm all ears. Open to advice, opportunities, and cool
            projects. Let's build something great together!
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <div
            ref={formRef}
            className="relative rounded-2xl border border-neutral-200 p-3 shadow-xl md:p-6 dark:border-neutral-800"
          >
            <h3 className="font-heading mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus:border-primary-dark shadow-primary/30 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-inner outline-none placeholder:text-neutral-500 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-400"
                    placeholder="John Wick"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:border-primary-dark shadow-primary/30 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-inner outline-none placeholder:text-neutral-500 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="focus:border-primary-dark shadow-primary/30 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-inner outline-none placeholder:text-neutral-500 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-400"
                  placeholder="Subject of your message..."
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="focus:border-primary-dark shadow-primary/30 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-inner outline-none placeholder:text-neutral-500 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-400"
                  placeholder="Tell me about your project idea, interest, or just say hi! 👋"
                />
              </div>

              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`group orange-gradient relative w-[80%] cursor-pointer overflow-hidden rounded-lg py-1.5 text-lg font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 active:scale-95 disabled:cursor-not-allowed md:py-2`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 duration-300 group-hover:gap-6">
                    {status === "sending" ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : status === "sent" ? (
                      <>
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send
                        <svg
                          className="h-5 w-5 rotate-90"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="hover:orange-gradient-hover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-3 shadow-xl md:p-6 dark:border-neutral-800">
            <h3 className="font-heading mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
              Direct Contact
            </h3>
            <div className="space-y-2 md:space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  href={method.url}
                  key={index}
                  className="group hover:bg-primary/5 flex cursor-pointer items-center justify-between rounded-xl p-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`rounded-lg p-1.5 ${method.color}`}>
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900 dark:text-white">
                        {method.platform}
                      </div>
                      <div className="text-sm text-neutral-600 transition-all duration-300! group-hover:tracking-widest dark:text-neutral-400">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
