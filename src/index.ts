import { createServer } from "http";
import { sendResponse } from "./utils";

const server = createServer((req, res) => {
  const url = req.url ?? "/";

  if (url === "/") {
    sendResponse(res, { message: "welcome to our server" }, 200);
    return;
  } else {
    sendResponse(res, { message: "Not Found" }, 404);
  }
});

const port = 3000;

server.listen(3000, () => {
  console.log(`Server is running ${port}`);
});
