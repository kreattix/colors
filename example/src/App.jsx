import { Colors } from '@kreattix/colors'
import { Fragment } from 'react'

import PallateColor from './PallateColor'

const App = () => {
  return (
    <div className="pallate-container">
      {Object.entries(Colors).map(([colorName, shades], index) => {
        return (
          colorName !== 'white' && (
            <Fragment key={index}>
              <h1 style={{ background: shades[500] }}>
                {colorName} - {shades[500]}
              </h1>
              <div key={index} className="pallate-item">
                {Object.entries(shades).map(([shade, color], index) => {
                  return (
                    <PallateColor
                      key={color}
                      color={color}
                      shades={shades}
                      index={index}
                      shade={shade}
                    />
                  )
                })}
              </div>
            </Fragment>
          )
        )
      })}
    </div>
  )
}

export default App
