import { createGlobalStyle } from 'styled-components';

import ShareTechMono from '../assets/fonts/share-tech-mono/ShareTechMono-Regular.ttf';
import NunitoExtraLight from '../assets/fonts/Nunito/static/Nunito-ExtraLight.ttf';
import NunitoLight from '../assets/fonts/Nunito/static/Nunito-Light.ttf';
import NunitoRegular from '../assets/fonts/Nunito/static/Nunito-Regular.ttf';
import NunitoSemiBold from '../assets/fonts/Nunito/static/Nunito-SemiBold.ttf';
import NunitoBold from '../assets/fonts/Nunito/static/Nunito-Bold.ttf';
import NunitoExtraBold from '../assets/fonts/Nunito/static/Nunito-ExtraBold.ttf';
import NunitoBlack from '../assets/fonts/Nunito/static/Nunito-Black.ttf';

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Share Tech Mono';
        src: url(${ShareTechMono}) format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoExtraLight}) format('truetype');
        font-weight: 200;
    }

    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoLight}) format('truetype');
        font-weight: 300;
    }

    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoRegular}) format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoSemiBold}) format('truetype');
        font-weight: 600;
    }

    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoBold}) format('truetype');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoExtraBold}) format('truetype');
        font-weight: 800;
    }

    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoBlack}) format('truetype');
        font-weight: 900;
    }
`;
