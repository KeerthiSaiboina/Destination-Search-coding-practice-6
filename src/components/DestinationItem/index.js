// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-list">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
