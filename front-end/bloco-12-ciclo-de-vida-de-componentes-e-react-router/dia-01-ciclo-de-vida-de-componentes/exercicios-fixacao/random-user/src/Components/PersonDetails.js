import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';


class PersonDetails extends React.Component {
    constructor(){
        super();

        this.state = {
            loading: true,
            person: [],
        };
    }

    componentDidMount() {
        const url = 'https://api.randomuser.me/';
        fetch(url).then((response) => response.json()).then((data) => {
            this.setState({
              person: data.results,
              loading: false,
            });
          });
      }

      shouldComponentUpdate(_nextProps, nextState) {
          console.log(nextState);
          const AGE = 50;
          if(nextState.person[0].dob.age > AGE) {
              return false;
          }
          return true;
      }

      getUserElements(user) {
          return {
              name: `${user.name.first} ${user.name.last}`,
              email: user.email,
              age: user.dob.age,
              image: user.picture.thumbnail,
          }
      }

    render() {
        const { person, loading } = this.state;
        if (loading) return <Loading />;
        return(
            <div>
                {person.map((currentPerson, index) => (
                  <PersonCard key={ index } person={ this.getUserElements(currentPerson) } />  
                ))}
            </div>
        );
    }
}

export default PersonDetails;
