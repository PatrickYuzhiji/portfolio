"use client";
import React from "react";
import { useState } from "react";
import { Container } from '@/components/layout/Container'
import { useOpenPanelTracking } from '@/hooks/useOpenPanel'

export default function ContactForm() {
  const op = useOpenPanelTracking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    details: "",
    email: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    type: "", // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      console.log("Email sent successfully:", data);

      // Track successful form submission
      op.trackContactFormSubmission(formData.subject);
      
      // Show success notification
      setNotification({
        show: true,
        type: "success",
        message:
          "Message sent successfully! I'll get back to you as soon as possible.",
      });

      // Clear form data after successful submission
      setFormData({
        subject: "",
        details: "",
        email: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error notification
      setNotification({
        show: true,
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly at yuzhiji1991@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container className="mt-9">
          {/* Notification Component */}
          {notification.show && (
            <div
              className={`fixed top-5 right-5 z-50 p-4 rounded-xl border shadow-lg max-w-md transition-all duration-300 ${
                notification.type === "success"
                  ? "bg-background border-green-200 text-foreground"
                  : "bg-background border-red-200 text-foreground"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  {notification.type === "success" ? (
                    <svg
                      className="h-5 w-5 text-green-600"
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
                  ) : (
                    <svg
                      className="h-5 w-5 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {notification.message}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotification((prev) => ({ ...prev, show: false }))
                  }
                  className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Contact Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl opacity-80">
              Get in Touch
            </h1>
            <p className="mt-6 text-base text-muted-foreground max-w-2xl">
              Send me a message and I&apos;ll get back to you as soon as possible
            </p>
          </div>

          {/* Contact Form */}
          <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border border-muted-foreground/20 rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject*
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-3 py-2 border border-muted-foreground/20 rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Message Details */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message*
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me more about your project, question, or how I can help you..."
                  rows={6}
                  className="w-full px-3 py-2 border border-muted-foreground/20 rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-muted-foreground/20 text-foreground rounded-xl text-sm font-medium hover:bg-muted/50 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
    </Container>
  );
}
