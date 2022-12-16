import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TemplatePage, { Button } from "../components/TemplatePage";
import { getDogWithId, getNextDog } from "../services/dogService";

export interface IDog {
  id: number;
  image: string;
}

const DogImage = styled.div`
  margin: 10px auto;
`;

const Dogs: React.FC<PageProps> = ({ location }) => {
  const [dog, setDog] = useState<IDog>();
  const [loading, setLoading] = useState(true);
  const searchParameters = new URLSearchParams(location.search);
  const dogId = Number.isInteger(Number(searchParameters.get("dogId")))
    ? Number(searchParameters.get("dogId"))
    : undefined;

  useEffect(() => {
    if (dogId) {
      setLoading(true);
      getDogWithId(dogId)
        .then((dog) => {
          setDog(dog);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          nextDog();
        });
    } else {
      nextDog();
    }
  }, []);

  const nextDog = () => {
    setLoading(true);
    getNextDog(dog?.id)
      .then((dog) => {
        setDog(dog);
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error. Please try again");
      })
      .finally(() => setLoading(false));
  };

  const getLinkForCurrentDog = () => {
    navigator.clipboard.writeText(
      location.origin + location.pathname + `?dogId=${dog?.id}`
    );
    alert("Linked copied");
  };

  return (
    <TemplatePage>
      <h1>Dogs:</h1>
      {loading ? (
        <h3>Loading, please wait ...</h3>
      ) : (
        dog ? 
        <>
          <p>Dog id: {dog?.id}</p>
          <DogImage>
            <img src={`data:image/jpeg;base64,${dog?.image}`} />
          </DogImage>
          <Button onClick={nextDog}>Next dog</Button>
          <br />
          <br />
          <Button onClick={getLinkForCurrentDog}>
            Get link for current dog
          </Button>
        </>
        : 
        <>
          <p>There was an error. Please refresh the page</p>
        </>
      )}
    </TemplatePage>
  );
};

export default Dogs;
export const Head: HeadFC = () => <title>Dogs</title>;
