import React from "react"


export default function TextEditor(props){

	var style_textarea

	if(props.collapsed){
		style_textarea = {
			padding: "0 18",
            display: "block",
            backgroundColor: "#fef9e7"
		}

	} else{
			style_textarea = {
				padding: "0 18",
	            display: "none",
	            backgroundColor: "#fef9e7"
	        }

		  }

	return(
		<div className="ui centered grid">
		    <div className="eight wide column">
		        <button 
		        	className="ui inverted brown button collapsible" 
		        	onClick={props.handleOnClick}
		        >
		          <i className="edit icon"></i><b>Editor</b>
		        </button>

		    	<textarea 
		    		id="editor" 
		    		value={props.value} 
		    		onChange={props.handleOnChange} 
		    		name="text-editor" 
		    		style={style_textarea} 
		    		rows="10"
		    	/>
		    </div>
		</div>		

	)
}

