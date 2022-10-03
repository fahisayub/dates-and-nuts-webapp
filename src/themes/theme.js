import {  extendTheme, theme as base,withDefaultColorScheme,withDefaultVariant } from "@chakra-ui/react";
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';


const inputSelectStyles={
    variants:{
        outline:{
            field:{
                borderColor:'brand.100',
               
                _focus:{
                    borderColor:'brand.500',
                    bg:'brand.50',
                    ring:2,
                    ringColor:'brand.500',
                },
                _hover:{
                    borderColor:'brand.500',
                }
            }
        }
    }
}

export const theme = extendTheme({
    colors: {
      brand:
      {
        50: '#ffefda',
        100: '#ffd9ad',
        200: '#ffc57d',
        300: '#ffb44b',
        400: '#ffa61a',
        500: '#e69500',
        600: '#b36700',
        700: '#814200',
        800: '#4e2200',
        900: '#1e0800',
      }
    },
    
  fonts: {

    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter,${base.fonts?.body}`,
  },
  components:{
    Input:{...inputSelectStyles},
    Select:{...inputSelectStyles},
    BottomNavigation,
    MenuItem:{
        baseStyle:{
            control:{
               _hover:{
                bgColor:'brand.50'
               }
            }
        }
        
    },
    Checkbox:{
        baseStyle:{
            
            control:{
                borderColor:'brand.500',
                _focus:{
                    ring:2,
                    ringColor:'brand.500',
                }
            }
        }
    },
    Radio:{
        baseStyle:{
            control:{
borderColor:'brand.500'
            }
        }
    },
   

    
  }
  
},
withDefaultColorScheme({
  colorScheme:'brand',
  components:['Checkbox','Radio','Divider','Button','Input','Select']

}),
withDefaultVariant({

})
);

