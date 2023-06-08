// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configuration-container">
          <h1 className="heading">Layout</h1>
          <div className="checkbox-container">
            <input
              checked={showContent}
              onChange={onChangeContent}
              type="checkbox"
              id="content"
            />
            <label className="label-text" htmlFor="content">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
              type="checkbox"
              id="leftNavbar"
            />
            <label className="label-text" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
              type="checkbox"
              id="rightNavbar"
            />
            <label className="label-text" htmlFor="rightNavbar">
              Right NavBar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
