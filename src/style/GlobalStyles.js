import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {

  &, &.dark-mode {

      /* Charcoal Dark Mode */
      --color-charcoal-main: #0e131a;
      --color-charcoal-shade1: #0a0d12;
      --color-charcoal-shade2: #07090c;
      --color-charcoal-tint1: #262b31;

      /* Purple */
      --color-purple-tint1: #f0e7fb;

       /* Text */
       --color-text-main: #e7e7e8;

       /* Project Hover Color */
       --color-project-hover: #0d0f14;

       /*Button Hover Color*/
       --color-button-hover: #6812da;

       /* Dark Mode Button */
       --color-darkbutton: orange;
  }

    &.light-mode{
   
      /* Charcoal Light Mode */
      --color-charcoal-main: #fff;
      --color-charcoal-shade1: #eeeeef;
      --color-charcoal-shade2: #cfd0d1;
      --color-charcoal-tint1: #cfd0d1;

      /* Purple */
      --color-purple-tint1: #0a0216;

       /* Text */
       --color-text-main: #010203;

       /* Project Hover Color */
       --color-project-hover: #dfe2e6;

       /*Button Hover Color*/
       --color-button-hover: #f0e7fb;

       /* Dark Mode Button */
       --color-darkbutton: #f0e7fb;
  }

    /* Main Purple */
    --color-purple-main: #6812da;

}
   
`;

export default GlobalStyles;
