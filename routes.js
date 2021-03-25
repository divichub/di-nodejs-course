const views = require("./views");

const allowedRoutes = [
  { name: "/", method: "GET" },
  { name: "/users", method: "GET" },
  { name: "/create-user", method: "POST" },
];

const checkRoute = (url, method) => {
  return (
    allowedRoutes.filter(
      (route) => route.name === url && route.method === method
    ).length > 0
  );
};

const httpListener = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (!checkRoute(url, method)) {
    res.setHeader("Content-Type", "text/html");
    res.write("404");
    return res.end();
  }

  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(views.rootContent);
    return res.end();
  }

  if (url === "/users" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(views.usersContent);
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(data).toString();
      console.log("New user added: ", parsedData.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = httpListener;
