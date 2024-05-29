'use client'

import React, {useEffect} from 'react';
import ReactFlow, { useNodesState, useEdgesState, Background, MiniMap, Controls } from 'reactflow';
 
import 'reactflow/dist/style.css';

export default function Flow({ hero, films, starships }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    
  const heroNode = {
    id: `hero-${hero.id}`,
    data: { label: hero.name },
    position:{  x: 0, y: 0 },
  };



  const filmNodes = films.map((film, index) => ({
    id: `film-${film.id}`,
    data: { label: film.title },
    position: { x: index * 200, y: 100},
  }));


  const starshipNodes = starships.map((starship, index) => ({
    id: `starship-${starship.id}`,
    data: { label: starship.name },
    position: { x: index * 200, y: 300 },
  }));


  const heroToFilmEdges = hero.films.map((filmId) => ({
    id: `edge-${hero.id}-${filmId}`,
    source: `hero-${hero.id}`,
    target: `film-${filmId}`,
    style: { stroke: '#0074D9', strokeWidth: 2 },

  }));

  const filmToStarshipEdges = films.flatMap((film) => {
    // Filter starships that belong to both the film and the selected hero
    const filteredStarships = (film.starships || []).filter((starshipId) =>
      starships.some((starship) => starship.id === starshipId)
    );
  
    // Create edges for the filtered starships
    return filteredStarships.map((starshipId) => ({
      id: `edge-${film.id}-${starshipId}`,
      source: `film-${film.id}`,
      target: `starship-${starshipId}`,
      style: { stroke: '#0074D9', strokeWidth: 2 },
    }));
  });
 

  const customNodes = [heroNode, ...filmNodes, ...starshipNodes];
  const customEdges = [...heroToFilmEdges, ...filmToStarshipEdges];
  

  setNodes(customNodes);
  setEdges(customEdges);
}, [hero, films, starships, setNodes, setEdges]);


    return (
      <div style={{ width: '100vw', height: '100vw', padding: '20px' }}>
     <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      
      >
         <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
    </div>
    );
  }
  