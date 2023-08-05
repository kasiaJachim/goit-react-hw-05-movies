import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h2>Page doesn't exist!</h2>
      <button>
        <Link to="/">Back to main page</Link>
      </button>
    </div>
  );
}

export default NotFoundPage;