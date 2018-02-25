import Helmet from 'react-helmet';
import path from 'path';
import html from '../../../client/build/index.html';
// Render Initial HTML
const renderFullPage = (decoded) => {
  const head = Helmet.rewind();

  return `
    <!doctype html>
    <html>
      <body class="fixed-navbar fixed-sidebar">
        <div id="root">DEVELOPMENT NODE SERVER</div>
        
      </body>
    </html>
  `;
};

export default function (req, res) {
  console.log("The Environment is ___________", process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production') {
    return res.set('Content-Type', 'text/html')
      .status(200)
      .end(html);
  }
  res
    .set('Content-Type', 'text/html')
    .status(200)
    .end(renderFullPage());
}