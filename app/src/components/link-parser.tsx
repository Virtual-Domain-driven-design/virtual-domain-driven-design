import * as React from "react"
// @ts-ignore
import processString from "react-process-string"

const ParsedContent = (props: { text: string }) => {
  const config = [
    {
      regex: /(www|http:\/\/|https:\/\/[\w.]+)[^\s]+[\w=]/gim,
      fn: (key: string, result: string) => (
        <span key={key}>
          <a
            className="link text-blue-600"
            data-link-external="true"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={`${result[0]}`}
          >{`(${result[1]}...)`}</a>
        </span>
      ),
    },
  ]
  return processString(config)(props.text)
}

export default ParsedContent
