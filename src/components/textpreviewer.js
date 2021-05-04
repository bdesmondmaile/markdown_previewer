import React from "react";
let marked = require("marked");

marked.setOptions({
 
  breaks: true,
 
});


function TextPreviewer(props){

	var style_textarea

	if(props.collapsed){
		style_textarea = {
			padding: "0 18",
            display: "block",
            overflow: "hidden",
            backgroundColor: "#fef9e7"
		}

	} else{
			style_textarea = {
				padding: "0 18",
	            display: "none",
	            overflow: "hidden",
	            backgroundColor: "#fef9e7"
	        }

		  }


	return(
			<div className="ui centered grid">
			    <div className="thirteen wide column">
			        <button className="ui inverted brown button collapsible" onClick={props.handleOnClick}>
			          <i className="desktop icon"></i><b>Preview</b>
			        </button>
			    	
			    	<div
			    		id="preview" 
                        style={style_textarea}
                        dangerouslySetInnerHTML={{
                  __html: marked(props.value),
                }}

			    	></div>

			    </div>
		    </div>

	);
}
export default TextPreviewer;
