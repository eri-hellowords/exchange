import {checkauth} from "../../checkauth.js";


export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const {type, mode} = query;

    switch (mode) {
        case "checkauth":
            return await checkauth(event)
            break;
        case "init":
            break
        default:
            throw createError({
                statusCode: 400,
                statusMessage: `Mode \`${mode}\` not supported`,
              })
            break;
    }


    return 


  })