import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Metropolis";
    src: url("../assets/Metropolis-Regular.otf");
    src: url("../assets/Metropolis-Medium.otf");
  }

body {

  color: ${p => p.theme.colors.primaryTextColor};
  margin: 0;
  font-family: 'Metropolis' ,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

/* Стилі для обнулення верхніх відступів елементів */
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

/* Стилі для обнулення базових властивостеей списків (ul) */

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

/* Стилі для обнулення базових властивостеей посилань */
a {
  text-decoration: none;
  color: inherit;
}

/* Властивості для коректного відображення картинок */
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Властивості для обнулення курсиву в address */

address {
  font-style: normal;
}

::-webkit-scrollbar {
 width: 2px;
}
::-webkit-scrollbar-track {
background: ${p => p.theme.colors.scrollBarColor};
border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background: ${p => p.theme.colors.scrollBarThumbColor};
}
`;

export default GlobalStyle;
