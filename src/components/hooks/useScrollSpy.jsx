import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 50) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop - offset;
        const bottom = top + el.offsetHeight;

        if (scrollY > top && scrollY <= bottom) {
          setActiveId(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
