import React from 'react'

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            avatar: '',
            age: 'Не указано',
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder='Имя' onChange={(event) => this.setState({ first_name: event.target.value})} />
                <input placeholder='Фамилия' onChange={(event) => this.setState({ last_name: event.target.value})} />
                <input placeholder='Почта' onChange={(event) => this.setState({ email: event.target.value})} />
                <input placeholder='Ссылка на аватарку' onChange={(event) => this.setState({ avatar: event.target.value})} />
                <input placeholder='Возраст' onChange={(event) => this.setState({ age: event.target.value})} />
                <label htmlFor='isHappy'>Счастлив?</label>
                <input type='checkbox' id='isHappy' onChange={(event) => this.setState({ isHappy: event.target.checked})} />
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Добавить</button>
            </form>
        )
    }
}

export default AddUser
