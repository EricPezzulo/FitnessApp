import React from 'react'
import { workouts } from '../../../workouts'



export async function getServerSideProps({query}:any) {
  let urlSlug = query
  // fetch data for workout by urlSlug -- will update by ID
  return {
    props:{
      urlSlug
    }
  }
}
const index = ({urlSlug}:any) => {
  const {id} = urlSlug
  let wod = workouts.filter((wod) => {
    wod.workoutName === id
})
  console.log(wod)
  console.log(id)
  return (
    <div>
      <div>
        {id}
      </div>
    </div>
  )
}

export default index