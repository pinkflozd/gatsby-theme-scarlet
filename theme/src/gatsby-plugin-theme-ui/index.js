import "typeface-open-sans"
import "typeface-pacifico"

const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'

export default {
  // Global Theme Styles
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: "#FFF",
    background: "#F53B57",
    primary: "#F53B57",
    secondary: "#EF5777",
    white: "#FFF",
    muted: "#f6f6f6",
  },
  fonts: {
    heading: `'Pacifico', ${systemFontStack}`,
    body: `'Open Sans', ${systemFontStack}`,
  },
  fontSizes: [12, 14, 16, 18, 24, 28, 32, 36, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 4.5,
    heading: 1.125,
  },
  letterSpacing: {
    body: "1px",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    p: {
      fontSize: [2, 3],
    },
    h1: {
      color: "text",
      fontSize: [7, 8],
      fontFamily: "heading",
    },
    h2: {
      color: "text",
      fontSize: [6, 7],
      fontFamily: "heading",
    },
    h3: {
      color: "text",
      fontSize: [5, 6],
      fontFamily: "heading",
    },
    // Theme UI Components
    Layout: {
      // backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontSize: 1,
    },
    Container: {
      padding: 4,
    },
  },
}
