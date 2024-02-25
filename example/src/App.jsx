import { Colors } from '@kreattix/colors'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const App = () => {
  return (
    <div className="pallate-container">
      {Object.entries(Colors).map(([colorName, shades], index) => {
        return (
          colorName !== 'white' && (
            <div key={index} className="pallate-item">
              {Object.entries(shades).map(([shade, color], index) => {
                const shadesArray = Object.values(shades)
                const nextIndex = index + 5
                const textColorIndex =
                  nextIndex > shadesArray.length - 1 ? nextIndex - shadesArray.length : nextIndex
                return (
                  <CopyToClipboard key={color} text={color}>
                    <div
                      className="pallate-color"
                      style={{
                        background: color,
                        color: shadesArray[textColorIndex],
                      }}
                    >
                      <div>{shade}</div>
                      {color}
                    </div>
                  </CopyToClipboard>
                )
              })}
            </div>
          )
        )
      })}
    </div>
  )
}

export default App
