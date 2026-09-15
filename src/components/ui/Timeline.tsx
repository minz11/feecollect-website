import { motion } from "framer-motion";
import { Check, AlertTriangle, AlertCircle, Clock } from "lucide-react";
import { Icon } from "./Icon";

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  status?: "upcoming" | "completed" | "warning" | "critical";
}

const statusConfig = {
  upcoming: { icon: Clock, color: "text-brand-neutral-400", bg: "bg-brand-neutral-100", border: "border-brand-neutral-200" },
  completed: { icon: Check, color: "text-success", bg: "bg-success/10", border: "border-success/20" },
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10", border: "border-warning/20" },
  critical: { icon: AlertCircle, color: "text-danger", bg: "bg-danger/10", border: "border-danger/20" },
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      {/* Vertical timeline (mobile/tablet) */}
      <ol role="list" className="lg:hidden relative pl-8 space-y-6">
        {/* Vertical connector */}
        <motion.div
          className="absolute left-3 top-2 bottom-2 w-0.5 bg-brand-neutral-900/20 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {items.map((item) => {
            const cfg = statusConfig[item.status ?? "upcoming"];
            const StatusIcon = cfg.icon;
            return (
              <motion.li
                key={item.id}
                role="listitem"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                {/* Dot */}
                <div className={`absolute -left-7 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white ${cfg.border}`}>
                  <Icon size="sm"><StatusIcon className={`h-4 w-4 ${cfg.color}`} /></Icon>
                  <span className="sr-only">{item.status ?? "upcoming"}</span>
                </div>

                {/* Content */}
                <div className={`rounded-xl border bg-white p-4 ${cfg.border} ${cfg.bg} md:p-5`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-semibold text-brand-neutral-900">{item.title}</h4>
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest ${cfg.bg} ${cfg.color} border ${cfg.border}`}>
                      {item.status ?? "upcoming"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-brand-neutral-600">{item.description}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-brand-neutral-500">{item.date}</span>
                </div>
              </motion.li>
            );
          })}
        </motion.div>
      </ol>

      {/* Horizontal timeline (desktop) */}
      <div className="hidden lg:block overflow-x-auto pb-4 -ml-2 -mr-2 px-2">
        <ol role="list" className="flex lg:flex-row flex-col items-start gap-6 min-w-max py-4">
          {items.map((item, index) => {
            const cfg = statusConfig[item.status ?? "upcoming"];
            const StatusIcon = cfg.icon;
            return (
              <motion.li
                key={item.id}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="relative flex flex-col items-center min-w-[240px] max-w-[280px] flex-shrink-0"
              >
                {/* Top connector (except first) */}
                {index > 0 && (
                  <motion.div
                    className="absolute left-full top-10 w-5 h-0.5 bg-brand-neutral-900/20"
                    initial={{ width: 0 }}
                    whileInView={{ width: "20px" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                )}

                {/* Dot */}
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white ${cfg.border}`}>
                  <Icon size="sm"><StatusIcon className={`h-6 w-6 ${cfg.color}`} /></Icon>
                  <span className="sr-only">{item.status ?? "upcoming"}</span>
                </div>

                {/* Content */}
                <div className={`mt-4 w-full rounded-xl border bg-white p-4 ${cfg.border} ${cfg.bg} text-center`}>
                  <div className="flex flex-wrap justify-center gap-2">
                    <h4 className="text-base font-semibold text-brand-neutral-900">{item.title}</h4>
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest ${cfg.bg} ${cfg.color} border ${cfg.border}`}>
                      {item.status ?? "upcoming"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-brand-neutral-600">{item.description}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-brand-neutral-500">{item.date}</span>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}