import React  ,{Component} from  'react';
import {PropTypes} from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import {createContainer} from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom'
import {Meteor} from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
// database collection
import {Players} from '../api/players'

import Player from './Player';
import TeamList from './TeamList';
import TeamStats from './TeamStats';
import EditPlayer from './EditPlayer';

import AccountsWrapper from './AccountsWrapper';
const defaultPlayer ={
    name:"player",
    team:"Team", //players's team
    ballManipulation:0,
    KickingAbilities:0,
    passingAbilities:0,
    duelTackling:0,
    fieldCoverage:0,
    blockingAbilities:0,
    gameStrategy:0,
    playmakingRisks:0,
    notes:"Nothing", //notes for the player for coach
    createdAt:new Date(),
    owner: "Team",
   //  createdAt and owner must be added in the server
 };
//
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      currentPlayer:defaultPlayer,
    }
  }
updateCurrentPlayer(currentPlayer){
  this.setState({
    currentPlayer:currentPlayer,
    showEditPlayer: false,
  });
}
showEditForm(){
  this.setState({
    showEditPlayer:!this.state.showEditPlayer,
  });
}

showFormOrStats(){
  if(this.state.showEditPlayer){
    return (<EditPlayer player={this.state.currentPlayer}
                   showTeamStats={this.showEditForm.bind(this)}/>)
  }else{
    return (<TeamStats players={this.props.players}/>);
  }
}//show <EditPlayer/> or <TeamStats />
   renderPlayers(){
     return this.props.players.map((player)=>{
        return <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer.bind(this)}/>
     })
   }//renderPlayersd
   header(){
     return (
       <AppBar
         title="Soccer Application"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
         showMenuIconButton={false}
         style={{backgroundColor:'#0277BD'}}>
         <AccountsWrapper />
      </AppBar>
     );
   }//App header
   main(){
     return(
       <div>
       <div className="row">
         <div className="col s12 m7 "><Player player={this.state.currentPlayer}
                                      showEditForm={this.showEditForm.bind(this)}/>
         </div>{/* player */}
         <div className="col s12 m5">
           <h2>Team</h2>
           <Link to="/new" className="waves-effect waves-light btn light-blue darken-3">Add player</Link>
           <Divider/>
             <List>
               {this.renderPlayers()}
             </List>
           <Divider/>
         </div>{/* TeamList */}
       </div>
       <div className="row">
         <div className="col s12">
           <br/>
           <Divider/>
          {this.showFormOrStats()}
          <Divider/>
         </div>{/* TeamStats or Edit player*/}
       </div>
     </div>
     );
   }//App main




   render(){
     return(
       <MuiThemeProvider>
         <div className="container">
           {this.header()}
           {this.main()}
         </div>{/*MuiThemeProvider`, expected a single ReactElement  */}
       </MuiThemeProvider>   //  {/* MuiThemeProvider */}

     );//return
   }//render
 }
 Home.propTypes={
   players: PropTypes.array.isRequired,
 }
 // export default withTracker(props => {
 //   // Do all your reactive data access in this method.
 //   // Note that this subscription will get cleaned up when your component is unmounted
 //   const handle = Meteor.subscribe('players');
 //
 //   return {
 //     listLoading: !handle.ready(),
 //     players: Players.find({}).fetch(),
 //   };
 // })(Home);
export default createContainer(()=>{
  Meteor.subscribe('players');
  const user=Meteor.userId();
  return{
    players: Players.find({owner: user},{sort:{name: 1}}).fetch()
  };
},Home);
