import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabItem = { label: string; content: React.ReactNode };

export function Tabs({
  items,
  defaultIndex = 0,
  onChange,
  variant = "default",
}: {
  items: TabItem[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
  variant?: "default" | "pills" | "underline";
}) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setActiveIndex(defaultIndex);
  }, [defaultIndex]);

  const select = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="tabs">
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={
          variant === "underline"
            ? "relative flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin border-b border-brand-neutral-200 -mb-px"
            : variant === "pills"
              ? "flex flex-wrap gap-2"
              : "relative flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin -mx-1 px-1"
        }
      >
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={item.label}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabs-panel-${i}`}
              id={`tabs-tab-${i}`}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => onKeyDown(e, i)}
              onClick={() => select(i)}
              className={
                variant === "underline"
                  ? `relative whitespace-nowrap snap-start py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow ${isActive ? "text-brand-neutral-900" : "text-brand-neutral-500 hover:text-brand-neutral-700"}`
                  : `relative whitespace-nowrap snap-start rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow ${isActive ? "bg-brand-yellow border-brand-yellow text-brand-neutral-900" : "bg-white border-brand-neutral-200 text-brand-neutral-700 hover:bg-brand-neutral-50"}`
              }
            >
              {item.label}
              {variant === "underline" && isActive && (
                <motion.div
                  layoutId="tabs-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-neutral-900"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          id={`tabs-panel-${activeIndex}`}
          role="tabpanel"
          aria-labelledby={`tabs-tab-${activeIndex}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-6"
        >
          {items[activeIndex]?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
