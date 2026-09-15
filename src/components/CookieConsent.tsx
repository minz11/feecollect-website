import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const KEY = "feecollect-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem(KEY, "accepted");
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-[300] mx-auto max-w-3xl rounded-2xl border border-brand-neutral-200 bg-white p-5 shadow-lg md:inset-x-auto md:bottom-6 md:right-6 md:w-full">
      <p className="text-sm leading-relaxed text-brand-neutral-700">
        We use cookies to improve your experience and analyze traffic. By continuing, you agree to our <a href="#privacy" className="font-semibold underline decoration-brand-neutral-300 underline-offset-4 hover:decoration-brand-yellow">Privacy Policy</a>.
      </p>
      <div className="mt-4 flex gap-2">
        <Button size="sm" onClick={accept}>Accept</Button>
        <Button size="sm" variant="ghost" onClick={() => setVisible(false)}>Decline</Button>
      </div>
    </div>
  );
}
