import "./PromptEditor.css";

function PromptEditor({

    value = "",

    onChange

}){

    return(

        <div className="prompt-editor">

            {!value && (

<div className="prompt-placeholder">

    <h3>

        Describe what you want Alpha to create...

    </h3>

    <p>

        Blog posts, emails, social media, marketing copy,
        YouTube scripts and much more.

    </p>

</div>

)}

            <textarea

                value={value}

                onChange={(e)=>onChange(e.target.value)}

                placeholder=""

                maxLength={4000}

            />

            <div className="prompt-footer">

                <span>

                    Try: "Write a LinkedIn post about AI..."

                </span>

                <span>

                    {value.length}/4000

                </span>

            </div>

        </div>

    );

}

export default PromptEditor;