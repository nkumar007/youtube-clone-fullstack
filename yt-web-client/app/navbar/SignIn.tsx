import { signInWithGoogle, signOut } from "../utils/firebase/firebase";
import { User } from "firebase/auth";

interface SignInProps {
  user: User | null;
}

const SignIn = ({ user }: SignInProps) => {
  return (
    <div>
      {user ? (
        <button
          className="inline-block border border-gray-500 text-[#065fd4] py-[10px] px-[20px] rounded-lg font-sans cursor-pointer hover:bg-[#bee0fd]  border-transparent"
          onClick={signOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="inline-block border border-gray-500 text-[#065fd4] py-[10px] px-[20px] rounded-lg font-sans cursor-pointer hover:bg-[#bee0fd]  border-transparent"
          onClick={signInWithGoogle}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default SignIn;
