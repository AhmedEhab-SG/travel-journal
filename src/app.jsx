import "./style.css";
import Header from "./header";
import Post from "./post";
import Data from "./data";

export default function App() {
  const visitLocation = Data.map((post) => (
    <Post key={post.title} post={post} />
  ));

  return (
    <div className="container">
      <div className="journal-container">
        <Header />
        {visitLocation}
      </div>
    </div>
  );
}
