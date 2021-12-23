const theme = {
  color: {
    white: "#fff",
  },
  palette: {
    primary: {
      main: "#1EA4CE",
      light: "#F2F0FD",
    },
    secondary: {
      main: "#147594",
    },
    accent: {
      main: "#ffd300",
      light: "",
      dark: "",
    },
    attention: {
      main: "#db471e",
      light: "#F04A4A",
      dark: "#BD3A3A",
    },
    background: {
      body: "#FAFAFA",
    },
    text: {
      primary: "#191919",
      secondary: "#697488",
      tertiary: "#6F6F6F"
    },
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  borderRadius: "2px",
  shadow: {
    elevation1: { "box-shadow": "0px 6px 24px rgba(93, 62, 188, 0.04)" },
  },

  typography: {
    h1: {
      "font-weight": "bold",
      "font-size": "68px",
    },
    h2: {
      "font-weight": "bold",
      "font-size": "50px",
    },
    h3: {
      "font-weight": "bold",
      "font-size": "38px",
    },
    h4: {
      "font-weight": "bold",
      "font-size": "28px",
    },
    h5: {
      "font-weight": "bold",
      "font-size": "22px",
    },
    h6: {
      "font-weight": "bold",
      "font-size": "16px",
    },
    body: {
      "font-weight": "normal",
      "font-size": "14px",
    },
    footer: {
      "font-weight": "normal",
      "font-size": "13px",
    },
    button: {
      "font-weight": "bold",
      "font-size": "14px",
      "text-transform": "uppercase",
    },
  },
};

export default theme;
