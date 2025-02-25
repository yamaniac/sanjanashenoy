'use client';
import { useEffect } from 'react';
import mermaid from 'mermaid';

export default function MermaidDiagram({ chart }) {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      themeVariables: {
        fontFamily: 'inter',
      }
    });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="mermaid my-8">
      {chart}
    </div>
  );
} 