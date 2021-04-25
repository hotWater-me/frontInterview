export const originData = [
  {
    type: "AND1",
    children: [
      { type: "OR1-1", children: [{ type: "ITEM1-1-1", props: { name: "testy" } }] },
      { type: "ITEM1-2", props: { name: "test" } },
    ],
  },
  {
    type: "AND2",
    children: [
      { type: "OR2-1", children: [{ type: "ITEM2-1-1", props: { name: "testy1" } }] },
      { type: "ITEM2-2", props: { name: "test1" } },
    ],
  },
  {
    type: "AND3",
  },
];
