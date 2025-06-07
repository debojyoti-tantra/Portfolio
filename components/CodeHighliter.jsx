'use client'
// components/CodeHighlight.js
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Okaidia theme
import "prismjs/components/prism-python"; // Python language support
import "prismjs/components/prism-jsx"; // jsx language support
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

const CodeHighlighter = ({ children, lang = "jsx" }) => {
  useEffect(() => {
    Prism.highlightAll(); // Highlight all code blocks
  }, [children, lang]); // Add dependencies to re-highlight when these change

  const copyText = () => {
    navigator.clipboard.writeText(children);
    toast.success('Code copied to clipboard!');
  };

  return (
    <div className="relative overflow-scroll w-[88vw] sm:w-[78vw]">
      <pre>
        <code className={`language-${lang}`}>
          {children}
        </code>
      </pre>
      <button 
        onClick={copyText}
        className="absolute top-2 right-2 p-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
        aria-label="Copy code"
      >
        <CopyIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CodeHighlighter;