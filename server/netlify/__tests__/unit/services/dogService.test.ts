import {
  IDog,
  IDogDb,
  rowsToDog,
} from "../../../functions/graphql/services/dogService";
import { expect, test } from "@jest/globals";

const row1: IDogDb = {
  constructor: {
    name: "RowDataPacket",
  },
  id: 1,
  image: "image 1",
};

const row2: IDogDb = {
  constructor: {
    name: "RowDataPacket",
  },
  id: 2,
  image: "image 2",
};

test("convert 1 row to dog", () => {
  expect(rowsToDog([row1])).toStrictEqual({
    id: row1.id,
    image: Buffer.from(row1.image, "binary").toString("base64"),
  } as IDog);
});

test("convert 2 rows to dog", () => {
  expect(rowsToDog([row2, row1])).toStrictEqual({
    id: row2.id,
    image: Buffer.from(row2.image, "binary").toString("base64"),
  } as IDog);
});

test("convert 0 rows to dog", () => {
  expect(rowsToDog([])).toBe(null);
});
