import Footer from "./layout/Footer"

const CenterFeed = ({children}:any) => {
  return (
    <div className='flex-grow w-full h-screen'>
      <div className='flex flex-col items-center w-full h-children z-10'>
        {children}
      </div>
    </div>
  )
}

export default CenterFeed

export const articles = [
  { title: "Why Stretching Is A Waste Of Time",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui ut.",
    img:"https://image.cnbcfm.com/api/v1/image/105999935-1562097549646sport-stretching-leisure-hobby-woman-strong-exercise-workout-gym-weightlifting_t20_v7r7a7.jpg?v=1594825333&w=1600&h=900"
  },
  { title: "Best Home Workouts Of 2022",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui ut.",
    img:"https://media.timeout.com/images/105689091/image.jpg"
  },
  { title: "11 Cable Exercies Your Not Doing (AND SHOULD!)",
  textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui ut.",
  img:"https://ca-times.brightspotcdn.com/dims4/default/f816054/2147483647/strip/true/crop/3600x2400+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faa%2F6d%2Fc7dded1941b4845390f04c16c94f%2F609690-tn-dpt-me-oc-gyms-reopen-20200909-1.jpg"
}
]