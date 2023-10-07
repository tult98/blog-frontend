import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Highlight, themes } from 'prism-react-renderer'

const CodeSnippet = ({ block }: { block: CodeBlockObjectResponse }) => {
  return (
    <Highlight theme={themes.github} code={block.code.rich_text[0].plain_text} language={block.code.language}>
      {(highlight) => {
        const { tokens, getLineProps, getTokenProps } = highlight
        return (
          <pre>
            <div className="relative w-full mt-12 mb-20">
              <div className="absolute z-[2] top-0 lg:right-[14px] right-6 pt-[2px] px-3 text-[18px] font-medium uppercase text-gray-700 -translate-y-full bg-syntax-bg rounded-t-lg font-sans">
                {block.code.language}
              </div>
              <div className="relative p-8 -mx-4 overflow-x-auto whitespace-pre-wrap rounded-md lg:-mx-8 bg-syntax-bg">
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({
                      line,
                      style: { color: 'var(--color-syntax-txt)' },
                    })}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </pre>
        )
      }}
    </Highlight>
  )
}

export default CodeSnippet
