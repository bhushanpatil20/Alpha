function Conversation({ messages }) {

    if(messages.length===0){

        return (

            <div className="conversation-empty">

                This conversation is empty.

                Start typing below.

            </div>

        );

    }

    return null;

}

export default Conversation;