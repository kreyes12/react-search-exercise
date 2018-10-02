import React from "react";
import BotCollection from './BotCollection'
import SearchForm from '../components/SearchForm'


class BotsPage extends React.Component {

  state = {
    searchBy: "",
    bots: []
  }

  handleChange = (searchTerm) => {
    this.setState({
      searchBy:searchTerm
    })
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      this.setState({
        bots:bots
      })
    })
  }

  selectBot = (bot) => {
    this.setState({
      selectedBot: bot
    })
  }

  render() {
    const filteredBots = this.state.bots.filter((bot) => {
        return bot.name.includes(this.state.searchBy)
    })

    return (
      <div>
        <SearchForm handleChange={this.handleChange} />
        <BotCollection bots={filteredBots}/>
      </div>
    );
  }

}

export default BotsPage;
