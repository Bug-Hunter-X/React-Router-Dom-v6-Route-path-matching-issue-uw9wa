```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div>Home</div>
  );
}
function About(){
  return(
    <div>About</div>
  );
}
function User(){
  let {userId} = useParams();
  return(
    <div>User {userId}</div>
  );
}
export default App;
```