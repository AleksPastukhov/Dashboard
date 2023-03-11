import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
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
`;

export default GlobalStyle;
