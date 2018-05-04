import React from 'react';
import {connect} from 'react-redux';


let ProfileScreenDumb = ({ cardQueue }) => 
    <div>
        {
            cardQueue.map(card => 
                <div>
                    <img src={card.imageurl} />
                    <button>Delete</button>
                </div>
                )
        }
    </div>

let mapStateToProps = (state) => {
    return { cardQueue: state.cardQueue };
}

let mapDispatchToProps = (dispatch) =>
    ({ dispatch: dispatch })

let ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(ProfileScreenDumb)

export default ProfileScreen;