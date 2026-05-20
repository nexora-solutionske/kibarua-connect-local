import { useEffect, useRef } from "react";

const TOOLS = [
  "🔨","🔧","🪚","🧰","🧱",
  "🧹","🪣","🧼","🧽",
  "✂️","💈","💅","💇",
  "📦","📦","🛵","🚲",
  "🪛","💡","🔌",
  "🧑‍🍳","🍳","🔪",
  "🌱","✂️","🚜",
  "💻","📱","📝",
];

const MAX_ICONS = 20;
const SPAWN_RATE = 2200;

export function FloatingIconsBg() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const spawn = () => {
      if (container.querySelectorAll(".bg-icon").length >= MAX_ICONS) return;
      const el = document.createElement("div");
      el.className = "bg-icon";
      el.innerText = TOOLS[Math.floor(Math.random() * TOOLS.length)];
      const left = Math.random() * 90;
      const scale = 0.7 + Math.random() * 0.6;
      const duration = 18 + Math.random() * 14;
      el.style.left = `${left}vw`;
      el.style.fontSize = `${scale * 28}px`;
      el.style.animationDuration = `${duration}s`;
      container.appendChild(el);
      setTimeout(() => el.remove(), duration * 1000);
    };

    const initial: number[] = [];
    for (let i = 0; i < 5; i++) initial.push(window.setTimeout(spawn, i * 600));
    const interval = window.setInterval(spawn, SPAWN_RATE);

    return () => {
      initial.forEach(clearTimeout);
      clearInterval(interval);
      container.querySelectorAll(".bg-icon").forEach((n) => n.remove());
    };
  }, []);

  return <div ref={ref} id="animated-bg" aria-hidden="true" />;
}
