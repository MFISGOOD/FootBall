import React  ,{Component} from  'react';
import {PropTypes} from 'prop-types'
import { red500} from 'material-ui/styles/colors';
const styles={
  alert:{
    color:red500,
  },
  danger:{

  },
  cancel:{
    'margin-right': 5,
    'background-color':red500,
  }
};


export default class EditPlayer extends Component{

  showTeamStats(){
    this.props.showTeamStats();
  }

   editPlayer(event){
     event.preventDefault();
     let updatePlayer={
       _id:this.props.player._id,
       name:this.refs.name.value,
       team:this.refs.team.value, //players's team
       ballManipulation:parseInt(this.refs.ballManipulation.value),
       KickingAbilities:parseInt(this.refs.KickingAbilities.value),
       passingAbilities:parseInt(this.refs.passingAbilities.value),
       duelTackling:parseInt(this.refs.duelTackling.value),
       fieldCoverage:parseInt(this.refs.fieldCoverage.value),
       blockingAbilities:parseInt(this.refs.blockingAbilities.value),
       gameStrategy:parseInt(this.refs.gameStrategy.value),
       playmakingRisks:parseInt(this.refs.playmakingRisks.value),
       notes:this.refs.notes.value, //notes for the player for coach
       owner: Meteor.userId(),
      //  createdAt and owner must be added in the server
     }
  Meteor.call('update.player',
                  updatePlayer,
                  (err, res) => {
                      if (err) {
                      $('#err-container').html('<strong>Oups! Something went wrong. The reason is: </strong>' + err.reason);

                      }else {
                        // success!
                        this.showTeamStats();
                        //  this.props.history.push('/');
                      }
                 });

    //players.insert
   }//submitPlayer

   render(){
     const currentPlayer=this.props.player;
     return(
        <div className="row">
          <form className="col s12" onSubmit={this.editPlayer.bind(this)}>
            <h3>Update player</h3>
            <div id="err-container" style={styles.alert}>
            </div> {/*Error container*/}
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Name" ref="name" type="text" className="validate"
                  defaultValue={this.props.player.name}/>
              </div>
              <div className="input-field col s6">
                <input placeholder="Team" ref="team" type="text" className="validate"
                  defaultValue={this.props.player.team}/>
              </div>
            </div> {/* 1 row */}

            <div className="row">
              <div className=" col s6">
                <h5>Ball manipulation</h5>
                <select  className="browser-default" ref="ballManipulation" defaultValue={this.props.player.ballManipulation}>
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
              <div className="col s6">
                <h5>Kicking abilities</h5>
                <select className="browser-default" ref="KickingAbilities" defaultValue={this.props.player.KickingAbilities}>
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
            </div> {/* 2 row */}

            <div className="row">
              <div className=" col s6">
                <h5>Passing abilities</h5>
                <select  className="browser-default" ref="passingAbilities" defaultValue={this.props.player.passingAbilities} >
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
              <div className="col s6">
                <h5>Duel tackling</h5>
                <select className="browser-default" ref="duelTackling" defaultValue={this.props.player.duelTackling}>
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
            </div> {/* 3 row */}

            <div className="row">
              <div className=" col s6">
                <h5>Field coverage - speed</h5>
                <select  className="browser-default" ref="fieldCoverage" defaultValue={this.props.player.fieldCoverage}>
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
              <div className=" col s6">
                <h5>Blocking abilities</h5>
                <select  className="browser-default" ref="blockingAbilities" defaultValue={this.props.player.blockingAbilities}>
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
            </div> {/* 4 row */}

            <div className="row">
              <div className="col s6">
                <h5>Game strategy</h5>
                <select className="browser-default" ref="gameStrategy" defaultValue={this.props.player.gameStrategy}>
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
              <div className=" col s6">
                <h5>Playmaking risks</h5>
                <select  className="browser-default" ref="playmakingRisks" defaultValue={this.props.player.playmakingRisks}>
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
            </div> {/* 5 row */}
            <div className="row">
              <div className="input-field col s6">
                <textarea placeholder="Notes" ref="notes" className="materialize-textarea"
                  defaultValue={this.props.player.notes}/>
              </div>
              <div className="input-field col s6">
                <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action">Update
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>{/* 6 row */}
           </form> {/*form */}
        </div>
     );
   }
 }

 EditPlayer.propTypes={
   player: PropTypes.object.isRequired,
 }
