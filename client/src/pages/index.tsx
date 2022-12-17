import * as React from "react";
import type { HeadFC } from "gatsby";
import TemplatePage, { Button } from "../components/TemplatePage";
import { useEffect, useState } from "react";
import { getCatFact } from "../services/catsService";
import styled from "styled-components";

const Fact = styled.p`
  border: 1px solid black;
  padding: 10px;
`;

const IndexPage: React.FC = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRandomFact();
  }, []);

  const getRandomFact = () => {
    setLoading(true);
    getCatFact()
      .then((fact) => setFact(fact))
      .catch((error) => {
        console.error(error);
        setFact("There was an error. Please try again");
      })
      .finally(() => setLoading(false));
  };

  return (
    <TemplatePage>
      <h1 data-testid="title">Random Fact about cats:</h1>
      {loading ? (
        <h3 data-testid="loading">Loading, please wait ...</h3>
      ) : (
        <>
          <Fact data-testid="fact">{fact}</Fact>
          <Button onClick={getRandomFact} data-testid="new-fact-button">
            Get new fact
          </Button>
        </>
      )}
    </TemplatePage>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Cat facts</title>;
