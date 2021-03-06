import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  render(){
    console.log(this.props)
    const { bots, selectBot } = this.props

    const botCards = bots.map((bot) => <BotCard bot={bot}/>)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { bots.map((bot) => <BotCard bot={bot}/>) }
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
