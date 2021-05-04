import React from 'react';
import TextPreviewer from "./components/textpreviewer";
import TextEditor from "./components/texteditor"


const default_text = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...  

Heres some code, \`<div></div>\`, between 2 backticks.
  
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!  

\`\`\` 
// this is multi-line code:  
function anotherExample(firstLine, lastLine) {  
	if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {  
		return multiLineCode;  
	}  
}  
\`\`\`   
1. And there are numbererd lists too.  
1. Use just 1s if you want!  
1. And last but not least, let's not forget **embedded images**:    

![](https://commonmark.org/help/images/favicon.png)`


class App extends React.Component {
		state = {
			collapsedTextEditor: false,
			collapsedTextPreviewer: false,
			value: default_text
		}


	handleClickPreviewer = () => {

		this.setState( prevState => {
			return { collapsedTextPreviewer: !prevState.collapsedTextPreviewer }

		})		
	}

	handleClickTextEditor = () => {

		this.setState( prevState => {
			return { collapsedTextEditor: !prevState.collapsedTextEditor }

		})		
	}

	handleOnChange = (e) => {
		this.setState({value: e.target.value});
	}

		
	render() {

		return(

	  		<div className="ui segment" style={{backgroundColor: "#ebedef"}}>
	  			<TextEditor 
	  				id="editor" 
	  				value={this.state.value} 
	  				handleOnChange={this.handleOnChange} 
	  				collapsed={this.state.collapsedTextEditor} 
	  				handleOnClick={this.handleClickTextEditor}
	  			/>
	  			<TextPreviewer 
	  				id="preview" 
	  				value={this.state.value} 
	  				collapsed={this.state.collapsedTextPreviewer} 
	  				handleOnClick={this.handleClickPreviewer}
	  			/>

		    </div>
	  	  )
		}
}

export default App;
