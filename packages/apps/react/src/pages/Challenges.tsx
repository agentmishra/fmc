import ChallengeGrid from '@/components/challenges/ChallengeGrid';
import Navbar from '@/components/navbar/Navbar';
import ScrollBtn from '@/components/scroll-to-top/ScrollBtn';

function App() {
  return (
    <>
      <Navbar>
        <a href="/fmc/javascript">JavaScript Mini Challenges</a>
        <a href="/fmc/vue/dist/#/">VueJs Mini Challenges</a>
      </Navbar>

      <div className="container text-center">
        <ChallengeGrid />
        <ScrollBtn />
      </div>
    </>
  );
}

export default App;
