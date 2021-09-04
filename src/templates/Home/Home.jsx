import "./Home.css";
import { useEffect, useState } from "react";
import Posts from "../../components/Posts";
import { getPosts } from "../../utils/loadPosts";
import Button from "../../components/Button";

function App() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const postsPerPage = 10;

  useEffect(() => {
    getPosts().then(async (postsAndPhotos) => {
      setPosts(postsAndPhotos.slice(page, postsPerPage));
      setAllPosts(postsAndPhotos);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    setPosts([...posts, ...nextPosts]);
    setPage(nextPage);
  };

  return (
    <section className="container">
      <Posts posts={posts} />
      <div className="button-container">
        {page + postsPerPage <= allPosts.length && (
          <Button text="Mais" onClick={loadMorePosts} />
        )}
      </div>
    </section>
  );
}

export default App;
