import App from "./App";

const app = express();

const htmlTemplate = reactDom => (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div id="mount">${reactDom}</div>
        <script src="./main.js"></script>
    </body>
    </html>
`);

app.get('/*', (req, res) => {
    const jsx = (<App />)
    const reactDom = renderToString(jsx)

    res.send(htmlTemplate(reactDom))
})

export default app;