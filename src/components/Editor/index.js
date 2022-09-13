import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import './style.css'

const Editor = ({}) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = {
		readonly: false,
        height: 500, 
    };

    const handleSave = () => { // Grava o documento no localstorege
        localStorage.setItem("document", content)
    }

    const loadDoc = () => { // Pega no localstorege o ultimo item salvo 
        setContent(localStorage.getItem("document"))
    }

	return (
        <>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />

            <div className='Btns'>
                <button onClick={handleSave}>Gravar Documento</button>
                <button onClick={loadDoc}>Carregar Último</button>
                <button onClick={() => setContent("")}>Novo</button> {/* limpa o state */}
            </div>
        </> 
	);
};

export default Editor;