import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-extrabold">No notes yet</h3>
      <p className="text-base-content/70 font-mono">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn font-bold bg-blue-600  hover:bg-blue-400">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;