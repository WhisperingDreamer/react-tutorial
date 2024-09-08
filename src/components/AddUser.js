import React from 'react'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: 1,
            isHappy: false
        }
    }

    render() {
        return (
            <form>
                <input placeholder='Имя' onChange={(event) => this.setState({ firstname: event.target.value})} />
                <input placeholder='Фамилия' onChange={(event) => this.setState({ lastname: event.target.value})} />
                <textarea placeholder='Биография' onChange={(event) => this.setState({ bio: event.target.value})} />
                <input placeholder='Возраст' onChange={(event) => this.setState({ age: event.target.value})} />
                <label htmlFor='isHappy'>Счастлив?</label>
                <input type='checkbox' id='isHappy' onChange={(event) => this.setState({ isHappy: event.target.checked})} />
                <button type='button' onClick={() => this.props.onAdd({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    bio: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                })}>Добавить</button>
            </form>
        )
    }
}

export default AddUser
