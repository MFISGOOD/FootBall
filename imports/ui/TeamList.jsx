import React  ,{Component} from  'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import {red500} from 'material-ui/styles/colors'
 export default class TeamList extends Component{
   handleClickEvent(event){
     this.props.updateCurrentPlayer(this.props.player);
   }
   deleteItem(event){
     Meteor.call('delete.player',
                  this.props.player._id,
                  (err, res) => {
                      if (err) {
                      $('#err-container').html('<strong>Oups! Something went wrong. The reason is: </strong>' + err.reason);

                      } else {
                        // success!
                      }
     });
   }
   render(){
     return(
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="player.jpg" />}
        rightIcon={<ActionDeleteForever hoverColor={red500} onClick={this.deleteItem.bind(this)}/>}
        onClick={this.handleClickEvent.bind(this)}
      />
     );
   }
 }
//
