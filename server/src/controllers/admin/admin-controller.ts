import { Request, Response } from "express";
import { AdminApiConstants } from "../../common/admin-api-constants.enum";

/**
 * POST /
 * Admin Controller routing.
 */
export let index = (req: Request, res: Response) => {
  console.log("req.url" , req.url);

  console.log("AdminApiConstants" , AdminApiConstants.CREATE_ORGANIZATION);

  switch (req.url) {
    case AdminApiConstants.CREATE_ORGANIZATION: {
       // statements;
       break;
    }
    default: {
      res.json({
        title: "404 Page Not Found"
      });
       break;
    }
  }
};
