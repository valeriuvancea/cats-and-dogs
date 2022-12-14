import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import TemplatePage from "../components/TemplatePage"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <TemplatePage>
      <h1>Page not found</h1>
      <p >
        Sorry 😔, we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>.
      </p>
    </TemplatePage>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
