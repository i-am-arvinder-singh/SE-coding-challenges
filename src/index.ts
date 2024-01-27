console.time("Execution time");

import { main as WCToolMain } from "./wc-tool/main";

const allPromises = Promise.all([WCToolMain()]);

allPromises
  .then(() => {
    console.log("Done");
    console.timeEnd("Execution time");
  })
  .catch((err) => {
    console.error(err);
    console.timeEnd("Execution time");
  });
