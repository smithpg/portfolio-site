import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import useContentWidth from '../../hooks/useContentWidth';
const bracketRegex = /(\{)([^\n}]+)(})/;
const parenthesisRegex = /(\()([^\n)]+)(\))/;
const TWO_SPACES = '  ';

const breakOnBracketPair = string => {
  function replacer(match, open, inner, close, offset, string) {
    return `${open}\n${TWO_SPACES}${inner}\n${close}`;
  }

  return string.replace(bracketRegex, replacer).split('\n');
};

const breakOnParenthesis = string => {
  function replacer(match, open, inner, close, offset, string) {
    return `${open}\n${TWO_SPACES}${inner}\n${close}`;
  }

  return string.replace(parenthesisRegex, replacer).split('\n');
};

const breakNearMaxLength = (string, maxLength) => {
  let ptr = maxLength;

  while (ptr !== 0) {
    if (string[ptr] === ' ') {
      break;
    } else {
      ptr--;
    }
  }

  if (ptr === 0) {
    ptr = maxLength;
  }

  return [string.slice(0, ptr), string.slice(ptr)];
};

function adjustLineLength(codeString, maxLength) {
  /**
   *  Find all lines that exceed max length and insert
   *  breaks according to formatting rules
   */
  function _reformat(line) {
    let reformattedLine = line;

    console.log(`
    ---
    _reformat call:
      Line: ${line}
      Line length: ${line.length}
      Max length: ${maxLength}
    ---`);

    if (line.length <= maxLength) {
      return line;
    } else {
      // If line contains a bracket pair...
      if (line.match(bracketRegex)) {
        // Break on bracket pair and recurse
        return breakOnBracketPair(line)
          .map(_reformat)
          .join('\n');
      } else if (line.match(parenthesisRegex)) {
        return breakOnParenthesis(line)
          .map(_reformat)
          .join('\n');
      } else {
        return breakNearMaxLength(line, maxLength)
          .map(_reformat)
          .join('\n');
      }
    }
  }

  const lines = codeString.split('\n');

  const reformattedLines = lines.map(_reformat);

  console.log(reformattedLines.join('\n'));

  return reformattedLines.join('\n');
}

const CodeBlock = ({ children }) => {
  let codeString = `console.log(2);
console.log(3);
function myFn(){
  console.log(3);

  // then return
  return 9;
}`;
  // codeString = codeString.replace(/\n\n/, 'TWO_SPACES' + '\n');

  return <div>eyy</div>;

  // console.log(codeString);
  // return (
  //   <div style={{ overflowX: 'scroll' }}>
  //     <Highlight {...defaultProps} code={codeString} language="javascript">
  //       {({ className, style, tokens, getLineProps, getTokenProps }) => (
  //         <pre
  //           className={className}
  //           style={{
  //             ...style,
  //             padding: '20px',
  //             whiteSpace: 'pre-wrap',
  //             minWidth: '400px',
  //           }}
  //         >
  //           {tokens.map((line, i) => (
  //             <div key={i} {...getLineProps({ line, key: i })}>
  //               {line.map((token, key) => (
  //                 <span key={key} {...getTokenProps({ token, key })} />
  //               ))}
  //             </div>
  //           ))}
  //         </pre>
  //       )}
  //     </Highlight>
  //   </div>
  // );
};

export default CodeBlock;
