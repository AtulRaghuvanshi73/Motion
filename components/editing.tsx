import React, { useState, useRef } from 'react';
import { FaBold, FaHighlighter, FaEraser } from 'react-icons/fa';

const Editing: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [bold, setBold] = useState<boolean>(false);
  const [highlight, setHighlight] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleBoldClick = () => {
    setBold(!bold);
  };

  const handleHighlightClick = () => {
    setHighlight(!highlight);
  };

  const handleHighlightSelection = () => {
    if (textAreaRef.current) {
      const start = textAreaRef.current.selectionStart;
      const end = textAreaRef.current.selectionEnd;
      const selectedText = text.substring(start, end);

      let newText = text;

      if (highlight) {
        newText = text.replace('<mark>', '').replace('</mark>', '');
      } else {
        newText =
          text.substring(0, start) +
          `<mark>${selectedText}</mark>` +
          text.substring(end, text.length);
      }

      setText(newText);
    }
  };

  const renderPreview = () => {
    let style: React.CSSProperties = {};

    if (bold) {
      style = { ...style, fontWeight: 'bold' };
    }

    if (highlight) {
      style = { ...style, backgroundColor: 'yellow' };
    }

    return (
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        style={{ ...style, border: '1px solid #ccc', padding: '10px', borderRadius: '4px', minHeight: '100px' }}
      />
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        rows={4}
        cols={50}
        style={{ marginBottom: '20px', padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <div>
        <button
          onClick={handleBoldClick}
          style={{
            marginRight: '10px',
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: bold ? '#4CAF50' : '#ccc',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          <FaBold /> {bold ? 'Unbold' : 'Bold'}
        </button>
        <button
          onClick={handleHighlightClick}
          style={{
            marginRight: '10px',
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: highlight ? '#FFEB3B' : '#ccc',
            color: '#000',
            cursor: 'pointer',
          }}
        >
          <FaHighlighter /> {highlight ? 'Unhighlight' : 'Highlight'}
        </button>
        <button
          onClick={handleHighlightSelection}
          style={{
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#2196F3',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          <FaEraser /> {highlight ? 'Unhighlight Text' : 'Highlight Selected Text'}
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <strong>Preview:</strong>
        <div style={{ marginTop: '10px' }}>
          {renderPreview()}
        </div>
      </div>
    </div>
  );
};

export default Editing;
