import React  ,{Component} from  'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Player from './Player';
import TeamList from './TeamList';
import TeamStats from './TeamStats';


//
 export default class Home extends Component{
   constructor(props){
     super(props);
     this.state={
       players:[],
     };
   }

   componentWillMount(){
     this.setState({
       players:[
         {
        _id:1,
        name:"Getial Ryan",
        ballManipulation:10,
        KickingAbilities:10,
        passingAbilities:10,
        duelTackling:10,
        fieldCoverage:10,
        blockingAbilities:10,
        gameStrategy:10,
        playmakingRisks:10,
       },
       {
       _id:2,
       name:"Mcaw Ritchie",
       ballManipulation:10,
       KickingAbilities:10,
       passingAbilities:10,
       duelTackling:10,
       fieldCoverage:10,
       blockingAbilities:10,
       gameStrategy:10,
       playmakingRisks:10,
       },
       {
      _id:3,
      name:"Maradonna Diego",
      ballManipulation:10,
      KickingAbilities:10,
      passingAbilities:10,
      duelTackling:10,
      fieldCoverage:10,
      blockingAbilities:10,
      gameStrategy:10,
      playmakingRisks:10,
       },
       {
     _id:4,
     name:"Ronaldo Cristiano",
     ballManipulation:10,
     KickingAbilities:10,
     passingAbilities:10,
     duelTackling:10,
     fieldCoverage:10,
     blockingAbilities:10,
     gameStrategy:10,
     playmakingRisks:10,
      },
     ]
     });
   }

   renderPlayers(){
     return this.state.players.map((player)=>{
        return <TeamList key={player._id} player={player} />
     })
   }//renderPlayers
   header(){
     return (
       <AppBar
         title="Soccer Application"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
         showMenuIconButton={false}/>
     );
   }//App header
   main(){
     return(
       <div className="row">
         <div className="col s12 m7 "><Player /></div>{/* player */}
         <div className="col s12 m5">
           <h2>Team players</h2>
           <Divider/>
             <List>
               {this.renderPlayers()}
             </List>
           <Divider/>
         </div>{/* TeamList */}
         <div className="col s12 m5">
            <h2>Team stats</h2>
           <TeamStats/>
         </div>{/* TeamStats */}
           {/* <RaisedButton label="Oh yeah we did it!"/> */}
       </div>//row
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

 // video: file:///Users/speed/Desktop/videos/video.html
