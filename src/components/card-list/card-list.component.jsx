import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = ({canavarlar})=> ( //forwardRef ?
    // const { canavarlar } = props //! yukarıda parçalandı zaten
    // console.log(this.props)
    
      <div className='card-list'>
        {canavarlar.map((canavar) => {
          // const { name, email, id } = canavar
          return <Card canavar={canavar} />
        })}
      </div>
)


export default CardList
