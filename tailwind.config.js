module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: '118px',
        md: '116px',
        lg: '565px',
        xl: '630px',
        xxl:'690px'
       },
	   width: {
        sm: '118px',
        md: '116px',
        lg: '565px',
        xl: '830px',
        xxl:'990px'
       },
	   fontFamily:{
		   Mulish: 'Mulish, sans-serif'
	   },
      colors: {
        	"transparent": "transparent",
	"black": "#000000",
	"white": "#ffffff",

	"blue": "#2196f3",
	"blue-50": "#06B6D4",
	"blue-100": "#0E7490",
	"blue-200": "#0284C7",
	"blue-300": "#64b5f6",
	"blue-400": "#42a5f5",
	"blue-500": "#2196f3",
	"blue-600": "#1e88e5",
	"blue-700": "#1976d2",
	"blue-800": "#1565c0",
	"blue-10": "#f5feff",
	"blue-100-accent": "#82b1ff",
	"blue-200-accent": "#448aff",
	"blue-400-accent": "#2979ff",
	"blue-700-accent": "#2962ff",


	"cyan": "#00bcd4",
	"cyan-50": "#e0f7fa",
	"cyan-100": "#CFFAFE",
	"cyan-200": "#80deea",
	"cyan-300": "#4dd0e1",
	"cyan-400": "#26c6da",
	"cyan-500": "#00bcd4",
	"cyan-600": "#00acc1",
	"cyan-700": "#0097a7",
	"cyan-800": "#00838f",
	"cyan-900": "#006064",
	"cyan-100-accent": "#84ffff",
	"cyan-200-accent": "#18ffff",
	"cyan-400-accent": "#00e5ff",
	"cyan-700-accent": "#00b8d4",
	"teal": "#009688",
	"teal-50": "#e0f2f1",
	"teal-100": "#b2dfdb",
	"teal-200": "#80cbc4",
	"teal-300": "#4db6ac",
	"teal-400": "#26a69a",
	"teal-500": "#009688",
	"teal-600": "#00897b",
	"teal-700": "#00796b",
	"teal-800": "#00695c",
	"teal-900": "#004d40",
	"teal-100-accent": "#a7ffeb",
	"teal-200-accent": "#64ffda",
	"teal-400-accent": "#1de9b6",
	"teal-700-accent": "#00bfa5",
	"green": "#4caf50",
	"green-50": "#e8f5e9",
	"green-100": "#c8e6c9",
	"green-200": "#a5d6a7",
	"green-300": "#81c784",
	"green-400": "#66bb6a",
	"green-500": "#4caf50",
	"green-600": "#43a047",
	"green-700": "#388e3c",
	"green-800": "#2e7d32",
	"green-900": "#1b5e20",
	"green-100-accent": "#b9f6ca",
	"green-200-accent": "#69f0ae",
	"green-400-accent": "#00e676",
	"green-700-accent": "#00c853",

	"grey": "#9e9e9e",
	"grey-50": "#fafafa",
	"grey-100": "#f5f5f5",
	"grey-200": "#eeeeee",
	"grey-300": "#e0e0e0",
	"grey-400": "#bdbdbd",
	"grey-500": "#9e9e9e",
	"grey-600": "#757575",
	"grey-700": "#616161",
	"grey-800": "#424242",
	"grey-900": "#212121",
	"blue-grey": "#607d8b",
	"blue-grey-50": "#eceff1",
	"blue-grey-100": "#cfd8dc",
	"blue-grey-200": "#b0bec5",
	"blue-grey-300": "#90a4ae",
	"blue-grey-400": "#78909c",
	"blue-grey-500": "#607d8b",
	"blue-grey-600": "#546e7a",
	"blue-grey-700": "#455a64",
	"blue-grey-800": "#37474f",
	"blue-grey-900": "#263238",

	"blue-50-contrast": "black",
	"blue-100-contrast": "black",
	"blue-200-contrast": "black",
	"blue-300-contrast": "black",
	"blue-400-contrast": "black",
	"blue-500-contrast": "white",
	"blue-600-contrast": "white",
	"blue-700-contrast": "white",
	"blue-800-contrast": "white",
	"blue-900-contrast": "white",
	"blue-100-accent-contrast": "black",
	"blue-200-accent-contrast": "white",
	"blue-400-accent-contrast": "white",
	"blue-700-accent-contrast": "white",

	"cyan-contrast": "white",
	"cyan-50-contrast": "black",
	"cyan-100-contrast": "black",
	"cyan-200-contrast": "black",
	"cyan-300-contrast": "black",
	"cyan-400-contrast": "black",
	"cyan-500-contrast": "white",
	"cyan-600-contrast": "white",
	"cyan-700-contrast": "white",
	"cyan-800-contrast": "white",
	"cyan-900-contrast": "white",
	"cyan-100-accent-contrast": "black",
	"cyan-200-accent-contrast": "black",
	"cyan-400-accent-contrast": "black",
	"cyan-700-accent-contrast": "black",
	"teal-contrast": "white",
	"teal-50-contrast": "black",
	"teal-100-contrast": "black",
	"teal-200-contrast": "black",
	"teal-300-contrast": "black",
	"teal-400-contrast": "black",
	"teal-500-contrast": "white",
	"teal-600-contrast": "white",
	"teal-700-contrast": "white",
	"teal-800-contrast": "white",
	"teal-900-contrast": "white",
	"teal-100-accent-contrast": "black",
	"teal-200-accent-contrast": "black",
	"teal-400-accent-contrast": "black",
	"teal-700-accent-contrast": "black",
	"green-contrast": "white",
	"green-50-contrast": "black",
	"green-100-contrast": "black",
	"green-200-contrast": "black",
	"green-300-contrast": "black",
	"green-400-contrast": "black",
	"green-500-contrast": "white",
	"green-600-contrast": "white",
	"green-700-contrast": "white",
	"green-800-contrast": "white",
	"green-900-contrast": "white",
	"green-100-accent-contrast": "black",
	"green-200-accent-contrast": "black",
	"green-400-accent-contrast": "black",
	"green-700-accent-contrast": "black",

	"grey-contrast": "black",
	"grey-50-contrast": "black",
	"grey-100-contrast": "black",
	"grey-200-contrast": "black",
	"grey-300-contrast": "black",
	"grey-400-contrast": "black",
	"grey-500-contrast": "black",
	"grey-600-contrast": "white",
	"grey-700-contrast": "white",
	"grey-800-contrast": "white",
	"grey-900-contrast": "white",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}