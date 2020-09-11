import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

export const renderRichText = (json, extraOptions) => {
  let options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        if (node.data.uri.startsWith(`http`)) {
          return (
            <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
              {node.content[0].value}
            </a>
          )
        } else {
          return <Link to={node.data.uri}> {node.content[0].value}</Link>
        }
      },
    },
  }

  if (typeof extraOptions === `object`) {
    options = {
      ...options,
      ...extraOptions,
    }
  }

  return documentToReactComponents(json, options)
}