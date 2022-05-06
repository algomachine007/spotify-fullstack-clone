// getting the user

import { validateRoute } from "../../lib/auth";

export default validateRoute(async (_req, res, user) => {
  res.json(user);
});
