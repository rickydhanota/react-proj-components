import React from 'react'

const PersonCardPropFunction = props => {
    const { lastName, firstName, age, hairColor } = props;
    return (
      <div className="container">
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
}


export default PersonCardPropFunction
