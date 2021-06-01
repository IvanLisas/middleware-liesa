import ReactDOM from 'react-dom'

type measureDomNodeType = {
  height: number
  width: number
}

const measureDomNode = (element: JSX.Element): measureDomNodeType => {
  const container: HTMLElement = document.createElement('nav')
  container.setAttribute('style', 'display: inline-block;position: absolute;visibility: hidden; zIndex: -1')

  document.body.appendChild(container)
  // Renders the React element into the hidden div
  ReactDOM.render(element, container)
  // Gets the element size
  const height = container.clientHeight
  const width = container.clientWidth

  // Removes the element and its wrapper from the document
  ReactDOM.unmountComponentAtNode(container)
  container.parentNode?.removeChild(container)
  return { height, width }
}

export default measureDomNode
