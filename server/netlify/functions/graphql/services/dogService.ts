import { RowDataPacket } from "mysql2";
import { pool } from "./databasePool";

export interface IDog {
  id: number;
  image: string;
}

export interface IDogDb extends RowDataPacket, IDog {}
interface ICount extends RowDataPacket {
  number: number;
}

export const getDogs = async () => {
  return await pool.query(`SELECT * FROM Dogs`);
};

const getNumberOfDogs = async () => {
  const [rows] = await pool.query<ICount[]>(`SELECT Count(*) number FROM Dogs`);
  return rows[0].number;
};

export const rowsToDog = (rows: IDogDb[]) => {
  if (rows.length > 0) {
    return {
      id: rows[0].id,
      image: Buffer.from(rows[0].image, "binary").toString("base64"),
    };
  } else {
    return null;
  }
};

export const getDogWithId = async (id: number): Promise<IDog | null> => {
  const [rows] = await pool.query<IDogDb[]>(
    //This is prone to sql injection, but the input is also verified by graphql to be an int
    `SELECT * FROM Dogs WHERE id = ${id}`
  );
  return rowsToDog(rows);
};

export const getNextDog = async (id?: number): Promise<IDog | null> => {
  const numberOfDogs = await getNumberOfDogs();
  let sql = "";
  // We will consider that there are no missing ids, and when the user wants the next dog from the last one, the cycle will start from the begining
  if (id && id !== numberOfDogs) {
    //This is prone to sql injection, but the input is also verified by graphql to be an int
    sql = `SELECT * FROM Dogs WHERE id = ${id + 1}`;
  } else {
    sql = `SELECT * FROM Dogs GROUP BY id HAVING MIN(id)`;
  }
  const [rows] = await pool.query<IDogDb[]>(sql);
  return rowsToDog(rows);
};
