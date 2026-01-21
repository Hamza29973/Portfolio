import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      className={`scrollup ${show ? "show-scroll" : ""}`}
      onClick={scrollToTop}
    >
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default ScrollUp;
