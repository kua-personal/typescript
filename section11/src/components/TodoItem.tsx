import { Todo } from "../types";
import {useTodoDispatch} from "../App";

interface Props extends Todo {
}

export default function TodoItem(props: Props) {
    const dispatch = useTodoDispatch()
    
    const onclickButton = () => {
        dispatch.onClickDelete(props.id)
    }
    
    return <div>
        {props.id}번: {props.content}
        <button onClick={onclickButton}>삭제</button>
    </div>
}