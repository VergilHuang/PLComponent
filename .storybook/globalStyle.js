// change global style
// https://dev.to/mariorodeghiero/storybook-with-a-global-style-4gj6

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: #f8f8f8;
        margin: 20px
    }
`;
