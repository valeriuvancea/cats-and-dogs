import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TemplatePage, { Button } from "../components/TemplatePage";
import { useEffect, useState } from "react";
import { getCatFact } from "../services/catsService";
import styled from "styled-components";

const Fact = styled.p`
  border: 1px solid black;
  padding: 10px;
`;

const IndexPage: React.FC<PageProps> = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewFact();
  }, []);

  const getNewFact = () => {
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
      <h1>Random Fact about cats:</h1>
      {loading ? (
        <h3>Loading, please wait ...</h3>
      ) : (
        <>
          <Fact>{fact}</Fact>
          <Button onClick={getNewFact}>Get new fact</Button>
        </>
      )}
    </TemplatePage>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Cat facts</title>;
