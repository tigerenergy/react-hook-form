import { createGlobalStyle } from 'styled-components'
import ToDoList from './ToDoList'

const GlobalStyle = createGlobalStyle
`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
	@@ -71,14 +67,10 @@ a {
`

function App() 
{
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}
export default App