import Helmet from 'react-helmet';
// Render Initial HTML
const renderFullPage = (decoded) => {
    const head = Helmet.rewind();

    // Import Manifests
    const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
    const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
    console.log(assetsManifest);

    return `
    <!doctype html>
    <html>
      <head>
        ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.3/toastr.min.css">
      </head>
      <body class="fixed-navbar fixed-sidebar">
        <div id="root"></div>
        <script>
          ${process.env.NODE_ENV === 'production' ?
            `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>` : ''}
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `;
};

export default function(req, res) {
    console.log("Insidedksfkhdsfkhdskhdfkhfdkhfdsk")
    // const changedUrl = !req.cookies['jwt-acl'] ? redirectToLogin(req.url) : redirectLogin(req.url);
    // if (req.url !== changedUrl) {
    //     return res.redirect(302, changedUrl);
    // }
    // const cookie = req.cookies['jwt-acl'] ? req.cookies['jwt-acl'] : '';
    // const decoded = jwt.decode(cookie) ? jwt.decode(cookie) : '';
    console.log("The Environment is ___________", process.env.NODE_ENV);
    res
        .set('Content-Type', 'text/html')
        .status(200)
        .end(renderFullPage());
}