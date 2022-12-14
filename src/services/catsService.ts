import axios from 'axios';

export interface IFact {
    fact: string
    length: number
}

export const getCatFact = async () => {
    const response = await axios.get<IFact>("https://catfact.ninja/fact");
    return response.data.fact;
}