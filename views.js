const rootContent = `
  <html>
    <head><title>Index</title></head>
    <body>
      <h1>Greetings, fill out the form below</h1>
      <form action="/create-user" method="POST">
        <input type="text" name="username" />
        <button type="submit">Send</button>
      </form>
    </body>
  </html>
`;

const usersContent = `
  <html>
    <head><title>Index</title></head>
    <body>
      <ul>
        <li>John Doe</li>
        <li>Jane Doe</li>
        <li>Janica</li>
      </ul>
    </body>
  </html>
`;

module.exports = { rootContent, usersContent };
