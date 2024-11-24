
import { extendTheme } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  // No custom tokens found, you can skip the theme augmentation.
}

const FRMDtheme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#fefce8",
          "100": "#fef9c3",
          "200": "#fef08a",
          "300": "#fde047",
          "400": "#facc15",
          "500": "#eab308",
          "600": "#ca8a04",
          "700": "#a16207",
          "800": "#854d0e",
          "900": "#713f12"
        }
      }
    },
    "dark": {
      "palette": {
        "primary": {
          "50": "#fefce8",
          "100": "#fef9c3",
          "200": "#fef08a",
          "300": "#fde047",
          "400": "#facc15",
          "500": "#eab308",
          "600": "#ca8a04",
          "700": "#a16207",
          "800": "#854d0e",
          "900": "#713f12"
        }
      }
    }
  }
})

export default FRMDtheme;