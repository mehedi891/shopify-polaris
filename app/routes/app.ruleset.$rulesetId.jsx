import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react';
import React from 'react'

export const loader = ({params})=>{

    const id = params.rulesetId;
      console.log(params)
    return json({
        id
    })
}

function Ruleset() {
  

    const {id} = useLoaderData();

  return (
    <div>Rulesetr: {id}</div>
  )
}

export default Ruleset