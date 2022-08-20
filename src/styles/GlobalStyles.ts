import { createGlobalStyle } from 'styled-components';

import colors from './Colors';

export const GlobalStyles = createGlobalStyle`
    :root {  
        --primary-color: ${colors.primary};
        --primary-lt-color: ${colors.primaryLight};
        --secondary-color: ${colors.secondary};
        --tertiary-color: ${colors.tertiary};
        --gray-800: ${colors.gray1};
        --gray-700: ${colors.gray2};
        --gray-600: ${colors.gray3};
        --gray-500: ${colors.gray4};
        --gray-400: ${colors.gray5};
        --gray-300: ${colors.gray6};
        --gray-200: ${colors.gray7};
        --danger-color: ${colors.redDanger};
        --white-color: ${colors.white};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--primary-color);
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }   

    html {
        scroll-behavior: smooth;
        font-size: 87.5%; // 14px
        
        @media (min-width: 768px) {
            font-size: 93.75%; // 15px
        }

        @media (min-width: 1200px) {
            font-size: 100%; // 16px
        }
    }

    body {
        background-color: var(--gray-800);
        margin: 0;
        padding: 0;
    }

    body, input, textarea, button {
        color: var(--gray-300);
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        color: var(--gray-200);
        font-weight: 800;
    } 

    h1 {
        color: var(--white-color);
        font-family: 'Share Tech Mono', sans-serif;
    }

    p {
        color:  var(--gray-700);
    }

    a {
        color: inherit;
        cursor: pointer;
        text-decoration: none;
    }

    button, input, select, textarea {
        appearance: none;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
