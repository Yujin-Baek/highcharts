import { rest } from "msw";

const handlers = [
  rest.get("http://localhost:3000/api/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          day: "월",
          userCount: 2,
        },
        {
          day: "화",
          userCount: 4,
        },
        {
          day: "수",
          userCount: 5,
        },
        {
          day: "목",
          userCount: 2,
        },
        {
          day: "금",
          userCount: 7,
        },
        {
          day: "토",
          userCount: 1,
        },
        {
          day: "일",
          userCount: 3,
        },
      ])
    );
  }),
];

export default handlers;
