import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import TemplatePage from "../components/TemplatePage";

const Dogs: React.FC<PageProps> = () => {
  return (
    <TemplatePage>
      <h1>Dogs</h1>
    </TemplatePage>
  );
};

export default Dogs;
export const Head: HeadFC = () => <title>Dogs</title>;
