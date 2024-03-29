import { useDispatch, useSelector } from "react-redux";
import Button from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
  return (
    <div >
        <h1>value = {'rip'}</h1>
        <Button onClick={increment}>increment +++</Button>
        <Button onClick={decrement}>decrement ---</Button>
    </div>
  );
};

export default Counter;