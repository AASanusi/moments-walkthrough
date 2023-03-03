import { rest } from "msw";

const baseURL = "https://drf-api-walkthru.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 13,
        username: "test11",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 13,
        profile_image: "https://res.cloudinary.com/dr2oyv6h1/image/upload/v1/media/images/SZA-CTR_ixks1d"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];