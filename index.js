//import slugify from "slugify";

import getData from './app.js';

(async () => {
    let user = await getData(10)
    console.log(user)
})();