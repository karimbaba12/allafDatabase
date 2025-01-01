// import strapiModule from "@strapi/strapi";
// import { Context, Next } from "koa";

// type Strapi = typeof strapiModule;

// export default (config: any, { strapi }: { strapi: Strapi }) => {
//   return async (ctx: Context, next: Next) => {
//     if (ctx.request.files) {
//       const files = Array.isArray(ctx.request.files.files)
//         ? ctx.request.files.files
//         : [ctx.request.files.files];

//       files.forEach((file: any) => {
//         // Remove the hash and keep the original name
//         file.hash = "";
//         file.name = file.name.replace(/\s/g, "_"); // Replace spaces with underscores
//       });
//     }
//     await next();
//   };
// };