import { deepmerge } from '@mui/utils';
import {
  experimental_extendTheme as extendMuiTheme,
  shouldSkipGeneratingVar as muiShouldSkipGeneratingVar,
} from '@mui/material/styles';
import colors from '@mui/joy/colors';
import {
  extendTheme as extendJoyTheme,
  CssVarsProvider,
  shouldSkipGeneratingVar as joyShouldSkipGeneratingVar,
  extendTheme
} from '@mui/joy/styles';

const { unstable_sxConfig: muiSxConfig, ...muiTheme } = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using
  // `CssVarsProvider` from Joy UI.
  cssVarPrefix: 'joy',
  colorSchemes: {
    dark: {
        palette: {
            primary: {
                main: '#ecc62f',
            },
            grey: colors.grey,
            error: {
                	main: colors.red[600],
            },
            info: {
                main: colors.purple[600],
            },
            success: {
                main: colors.green[600],
            },
            warning: {
                main: colors.yellow[300],
            },
            common: {
                white: '#FFF',
                black: '#09090D',
            },
            divider: colors.grey[800],
            text: {
                primary: colors.grey[100],
                secondary: colors.grey[300],
            },
        },
    },
  },
});

const _joyTheme = extendTheme({
    cssVarPrefix: 'joy',
    colorSchemes: {
      dark: {
        palette: {
            primary: {
                solidBg: '#ecc62f',
                solidBorder: '#ecc62f',
                solidHoverBg: '#bd9e26',
                solidHoverBorder: '#bd9e26',
                solidActiveBg: '#a58b21',
                solidActiveBorder: '#a58b21',
                solidDisabledBg: '#0d6efd',
                solidDisabledBorder: '#0d6efd',
                solidColor: '#000',

                softBg: 'rgba(236, 198, 47, 0.1)',
                softBorder: 'rgba(236, 198, 47, 1)',
                softHoverBg: 'rgba(236, 198, 47, 0.3)',
                softHoverBorder: 'rgba(236, 198, 47, 0.3)',
                softActiveBg: 'rgba(236, 198, 47, 0.5)',
                softActiveBorder: 'rgba(236, 198, 47, 0.5)',
                softDisabledBg: 'rgba(236, 198, 47, 0.05)',
                softDisabledBorder: 'rgba(236, 198, 47, 0.05)',
                softColor: 'rgba(236, 198, 47, 1)',

                outlinedBg: 'rgba(236, 198, 47, 0.1)',
                outlinedBorder: 'rgba(236, 198, 47, 1)',
                outlinedHoverBg: 'rgba(236, 198, 47, 0.3)',
                outlinedHoverBorder: 'rgba(236, 198, 47, 0.3)',
                outlinedActiveBg: 'rgba(236, 198, 47, 0.5)',
                outlinedActiveBorder: 'rgba(236, 198, 47, 0.5)',
                outlinedDisabledBg: 'rgba(236, 198, 47, 0.05)',
                outlinedDisabledBorder: 'rgba(236, 198, 47, 0.05)',
                outlinedColor: 'rgba(236, 198, 47, 1)',
                
                plainBg: 'rgba(236, 198, 47, 0.1)',
                plainBorder: 'rgba(236, 198, 47, 1)',
                plainHoverBg: 'rgba(236, 198, 47, 0.3)',
                plainHoverBorder: 'rgba(236, 198, 47, 0.3)',
                plainActiveBg: 'rgba(236, 198, 47, 0.5)',
                plainActiveBorder: 'rgba(236, 198, 47, 0.5)',
                plainDisabledBg: 'rgba(236, 198, 47, 0.05)',
                plainDisabledBorder: 'rgba(236, 198, 47, 0.05)',
                plainColor: 'rgba(236, 198, 47, 1)',
            }
        } 
      }
    },
    components: {
      JoyCard: {
        styleOverrides: {
          root: {
            borderRadius: '10px'
          }
        }
      }
    }
  });

const { unstable_sxConfig: joySxConfig, ...joyTheme} = extendJoyTheme(_joyTheme);

// You can use your own `deepmerge` function.
// joyTheme will deeply merge to muiTheme.
const mergedTheme = (deepmerge(muiTheme, joyTheme) as unknown) as ReturnType<
  typeof extendJoyTheme
>;

mergedTheme.unstable_sxConfig = {
  ...muiSxConfig,
  ...joySxConfig
};

export const ThemeWrapper:React.FC<any> = (props) => {
  return (
    <CssVarsProvider
      theme={mergedTheme}
      shouldSkipGeneratingVar={(keys:any) =>
        muiShouldSkipGeneratingVar(keys) || joyShouldSkipGeneratingVar(keys)
      }
    >
      {props.children}
    </CssVarsProvider>
  );
}
