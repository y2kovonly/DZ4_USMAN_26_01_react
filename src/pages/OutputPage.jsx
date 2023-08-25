import {useSelector} from "react-redux";

export const OutputPage = () => {
  const name = useSelector(state => state.name)
  const age = useSelector(state => state.age)

  return (
    <div>
      <span>{`Name: ${name}`}</span>
      <br/>
      <span>{`Age: ${age}`}</span>
    </div>
  )
}