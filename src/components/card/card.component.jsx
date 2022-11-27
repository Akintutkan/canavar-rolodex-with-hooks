import './card.styles.css'

const Card=({canavar})=>  { // aşapıda this.props.canavar yazmak yerine bu şekilde
    const { id, name, email } = canavar
    return(
      <div className='card-container' key={id}>
        <img
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
          alt={`canavar ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }


export default Card
