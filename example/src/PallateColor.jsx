import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const PallateColor = ({ color, shades, index, shade }) => {
  const [copiedColor, setCopiedColor] = useState()
  const shadesArray = Object.values(shades)
  const nextIndex = index + 5
  const textColorIndex =
    nextIndex > shadesArray.length - 1 ? nextIndex - shadesArray.length : nextIndex
  return (
    <CopyToClipboard
      onCopy={() => {
        setCopiedColor('Copied')
        setTimeout(() => {
          setCopiedColor()
        }, 2000)
      }}
      key={color}
      text={color}
    >
      <div
        className="pallate-color"
        style={{
          background: color,
          color: shadesArray[textColorIndex],
        }}
      >
        {copiedColor ?? (
          <>
            <div>{shade}</div>
            <div>{color}</div>
          </>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default PallateColor
