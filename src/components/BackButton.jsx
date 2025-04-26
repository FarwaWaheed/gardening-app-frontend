import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';


export default function BackButton({ to = -1, label = 'Back' }) {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => navigate(to)}
        className="flex items-center text-green-700 hover:text-green-900 font-medium mb-4"
      >
        <MdArrowBack size={20} className="mr-1" />
        {label}
      </button>
    );
  }
  