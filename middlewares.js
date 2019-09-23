import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "JsTube";
  res.locals.routes = routes;
  next();
};
