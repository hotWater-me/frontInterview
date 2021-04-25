export const originData = [
  {
    type: "AND",
    children: [
      { type: "OR", children: [{ type: "ITEM", props: { name: "testy" } }] },
      { type: "ITEM", props: { name: "test" } },
    ],
  },
  {
    type: "AND",
    children: [
      { type: "OR1", children: [{ type: "ITEM1", props: { name: "testy1" } }] },
      { type: "ITEM1", props: { name: "test1" } },
    ],
  },
];
