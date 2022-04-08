
const UserScoreCard = ({name, score}:any) => {
  return (
    <div className="flex w-full py-1 items-center justify-between border-b">
        <div className="flex w-full">
            <div className="rounded-full bg-orange-300 w-12 h-12 ml-2"></div>
        </div>
        <div className="flex w-full">
            <p className="text-lg">{name}</p>
        </div>
        <div className="flex w-full">
            <p className="text-lg">{score}</p></div>
    </div>
  )
}

export default UserScoreCard
