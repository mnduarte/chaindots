import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const themeMapping = {
    dark: {
      title: "✹ Dark Mode",
      className: "dark",
    },
    light: {
      title: "✺ Light Mode",
      className: "light",
    },
  };
  const mode = theme as keyof typeof themeMapping;

  return (
    <div className={themeMapping[mode].className}>
      <header>
        <div className="container-align margin-y">
          <h2 onClick={() => navigate(`/`)}>Where in the world?</h2>

          <div
            className="theme-mode"
            onClick={() =>
              setTheme((currentTheme) =>
                currentTheme === "light" ? "dark" : "light"
              )
            }
          >
            {themeMapping[mode].title}
          </div>
        </div>
      </header>
      <div
        className={`body-container margin-y ${themeMapping[mode].className}`}
      >
        {children}
      </div>
    </div>
  );
};
