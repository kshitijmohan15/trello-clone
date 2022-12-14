import Column from './Column'
import {AppContainer} from './styles'
import AddNewItem from './AddNewItem'
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';

function App() {

  const {lists, dispatch} = useAppState()
  
  return (
    <AppContainer>
      {lists.map(list => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText='+ Add new list' onAdd={text=> dispatch(addList(text))}/>
    </AppContainer>
  );
}

export default App;
