import { rest } from "msw";

const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          lineId: 1,
          day: "월",
          userCount: 1,
        },
        {
          lineId: 1,
          day: "화",
          userCount: 2,
        },
        {
          lineId: 1,
          day: "수",
          userCount: 1,
        },
        {
          lineId: 1,
          day: "목",
          userCount: 4,
        },
        {
          lineId: 1,
          day: "금",
          userCount: 3,
        },
        {
          lineId: 1,
          day: "토",
          userCount: 6,
        },
        {
          lineId: 1,
          day: "일",
          userCount: 8,
        },
        {
          lineId: 2,
          day: "월",
          userCount: 2,
        },
        {
          lineId: 2,
          day: "화",
          userCount: 4,
        },
        {
          lineId: 2,
          day: "수",
          userCount: 5,
        },
        {
          lineId: 2,
          day: "목",
          userCount: 2,
        },
        {
          lineId: 2,
          day: "금",
          userCount: 7,
        },
        {
          lineId: 2,
          day: "토",
          userCount: 1,
        },
        {
          lineId: 2,
          day: "일",
          userCount: 3,
        },
      ])
    );
  }),
];

export default handlers;
