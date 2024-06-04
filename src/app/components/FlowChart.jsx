'use client'

import React, {useEffect} from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
 
import 'reactflow/dist/style.css';


export default function FlowChart({ hero, films, starships }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
    //Create node for hero 
  const heroNode = {
    id: `hero-${hero.id}`,
    data: { label: hero.name },
    position: {x:0, y: 0},
    style: { 
      backgroundColor: '#3B82F6', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '10px'},
  };


//Create node for films 
  const filmNodes = films.map((film, index) => ({
    id: `film-${film.id}`,
    data: { label: film.title },
    position: { x: index * 200, y: 100},
    style: { 
      backgroundColor: '#FBBF24', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '10px',
      minHeight: '50px',
      textAlign: 'center'},
  
  }));

//Create node for starships 
  const starshipNodes = starships.map((starship, index) => ({
    id: `starship-${starship.id}`,
    data: { label: starship.name },
    position: { x: index * 200, y: 300 },
    style: { 
      backgroundColor: '#FFC0CB', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '10px' },
  }));

// Create edges for the filtered films
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
 
 //Combining all nodes and all edges in the appropriate arrays
  const customNodes = [heroNode, ...filmNodes, ...starshipNodes];
  const customEdges = [...heroToFilmEdges, ...filmToStarshipEdges];
  

  setNodes(customNodes);
  setEdges(customEdges);
}, [hero, films, starships, setNodes, setEdges ]);


    return (
      <div style={{ width: "100%", height: "80vh"}}>
     <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        </ReactFlow>
    </div>
    );
  }
  